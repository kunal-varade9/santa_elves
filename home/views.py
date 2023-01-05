from django.shortcuts import render, HttpResponse, redirect
from event.models import Event
from json import dumps
from django.contrib.auth.decorators import login_required
from event.views import get_all_events, get_event
import numpy as np
import pandas as pd
import seaborn as sns
import math
import random


import warnings
warnings.filterwarnings('ignore')


# Create your views here.
def home(request):
    events = []
    raw_events = get_all_events()
    for i in raw_events:
        events.append(list(i))
    return render(request,'home.html',{'events':events})

def buy_ticket_form(request):
    if request.method == 'POST':
        user = request.user
        city = request.POST['city']
        event_id = request.POST['event']
        tickets = request.POST['tickets']
        date = request.POST['date']
        event = Event(user=user,city=city,event=event_id,tickets=tickets,date=date)
        event.save()
        return redirect('event_page',id=event_id,bookings = event.id)
    


def event_page(request,id,bookings):
    event = get_event(id)
    e = Event.objects.get(id=5)
    booking = Event.objects.get(id=bookings)
    
    df = pd.read_table('/Users/raptor/Desktop/django_projects/christmasproject/home/static/csv/ticket_booking.csv',sep=",",encoding="Windows-1252")
    
    df["price"].value_counts()
    x = df[['city','location','date']]
    y = df['crowd']
    from sklearn.preprocessing import OrdinalEncoder
    catcol=x.select_dtypes(object).columns
    oe=OrdinalEncoder()
    x[catcol]=oe.fit_transform(x[catcol])
    from sklearn.model_selection import train_test_split
    xtrain,xtest,ytrain,ytest=train_test_split(x,y,test_size=0.2,random_state=1)
    from sklearn.linear_model import LinearRegression

    linreg=LinearRegression()

    linreg.fit(xtrain,ytrain)

    ypred = linreg.predict(xtest)
    
    

    city = {'mumbai':1,'pune':2,'delhi':3,'banglore':4,'kolkata':5}
    date = {'2022-12-30':1,'2022-12-30':2,'2023-01-01':3}
    for i in city.keys():
        if i == booking.city.lower():
            city = [[city[i]]][0]
            print(city,type(city))
    for i in date.keys():
        if i == booking.date:
            date = [[date[i]]][0]
            print(date,type(date))
    predict_ = random.choice([linreg.predict([[0,21,1]]),linreg.predict([[4,21,1]]),linreg.predict([[6,21,77]]),linreg.predict([[7,27,6]]),linreg.predict([[9,22,10]]),linreg.predict([[4,22,11]]),linreg.predict([[9,22,17]])])
    predict = math.floor(int(predict_[0]))



   
    return render(request,'event_page.html',{'event':event,'book':booking,'predict':predict,})

def vouncher(request,id,bookings):
    user = request.user
    event = get_event(id)
    booking = Event.objects.get(id=bookings)
    print(booking)
    return render(request,'vouchers.html',{'event':event,'user':user,'book':booking})

def speech(request):
    return render(request,'index.html')