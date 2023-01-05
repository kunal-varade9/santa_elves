from django import template

register = template.Library()


@register.filter
def ticketPrice(value,count_):
    return str(int(value)*int(count_))