from django.db import models
from django.contrib.auth.models import AbstractBaseUser,UserManager,PermissionsMixin
from django.contrib.auth.hashers import make_password
from django.conf import settings
from django.core.mail import send_mail
# Create your models here.

class CustomUserManager(UserManager):
    def _create_user(self, email, username, password, **extra_fields):
        if not email:
            raise ValueError('Email must be set')
        email = self.normalize_email(email)
        user = self.model(
            email = email,
            username = username,
            password = make_password(password),
            **extra_fields)
        user.save(using=self._db)
        return user
        
    def create_user(self, email, username = None, password=None, **extra_fields): 
        extra_fields.setdefault('is_staff',False)
        extra_fields.setdefault('is_superuser',False)
        return self._create_user(email,username,password,**extra_fields)
    
    def create_superuser(self,email, username=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser',True)
        
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        
        return self._create_user(email,username,password,**extra_fields)

class CustomUser(AbstractBaseUser,PermissionsMixin):
    username = models.CharField(verbose_name='Username',max_length=255,null=False,unique=True)
    email = models.EmailField(verbose_name='Email',max_length=255,null=False,unique=True)
    first_name = models.CharField('Firstname', max_length=255,null=True)
    last_name = models.CharField('Lastname', max_length=255,null=True)
    is_active = models.BooleanField(verbose_name='Is active',default=True)
    is_staff = models.BooleanField(default=False) 
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()
    
    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name"]
    
    def fullname(self):
        return f'{self.first_name} {self.last_name}'
    
    def __str__(self):
        return self.username
    
    def email_user(self, subject, message, from_email=None, **kwargs):
        send_mail(subject, message, from_email, [self.email], **kwargs)
    
    class Meta:
        pass
