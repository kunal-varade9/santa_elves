from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model,authenticate,login,logout
from django.contrib.auth.hashers import make_password
# Create your views here.
User = get_user_model()

def userRegister(request):
    if request.method == 'POST':
        first_name = request.POST['fname']
        last_name = request.POST['lname']
        email = request.POST['email']
        raw_password = request.POST['password']
        password = make_password(raw_password)
        username = email.split('@')[0]
        user = User(first_name= first_name,
                    last_name = last_name,
                    email = email,
                    password = password,
                    username=username,
                    )
        user.save()
        return redirect('home')
    return render(request,'register.html')
    
def userLogin(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request,username=email,password=password)
        if user:
            login(request,user)
            return redirect('home')
        else:
            pass
    else:
        pass
    
def userLogout(request):
    logout(request)
    return redirect('home')