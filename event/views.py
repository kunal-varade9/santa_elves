from django.shortcuts import render
from django.db import connection

def get_all_events():
    with connection.cursor() as cursor:
        cursor.execute("select * from christmas")
        events = cursor.fetchall()
    return events


def get_event(id):
    with connection.cursor() as cursor:
        cursor.execute(f"select * from christmas where id = {id}")
        event = cursor.fetchone()
    return event





