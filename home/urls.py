from django.urls import path
from . import views as v
urlpatterns = [
    path('',v.home, name='home'),
    path('event/<int:id>/<int:bookings>/',v.event_page, name='event_page'),
    path('eventform/',v.buy_ticket_form, name='buy_ticket_form'),
    path('vouchers/<int:id>/<int:bookings>/',v.vouncher, name='voucher')
]