from django.db import models
from django.conf import settings


# Create your models here.
class Event(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    city = models.CharField(max_length=255,null=False)
    event = models.CharField(max_length=255)
    tickets = models.IntegerField()
    date = models.DateField()
    
    def __str__(self):
        return self.event
    
    def get_event_id(self):
        return int(self.event)
    
    class Meta:
        db_table = 'event'
        
    
# class Events(models.Model):
#     event_name = models.CharField(max_length=300)
#     fun_act = models.TextField(max_length=255)
#     city = models.CharField(max_length=200)
#     date = models.CharField(max_length=200)
#     time = models.CharField(max_length=200)
#     location = models.TextField(max_length=300)
#     price = models.IntegerField(max_length=200)

#     def __str__(self):
#         return self.event_name
    
#     class Meta:
#         db_table = 'christmas'
        