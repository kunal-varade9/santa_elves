from django.urls import path
from . import views as v
urlpatterns = [
    path('registration/',v.userRegister,name='registration'),
    path('login/',v.userLogin,name='login'),
    path('logout/',v.userLogout,name='logout'),
    
]