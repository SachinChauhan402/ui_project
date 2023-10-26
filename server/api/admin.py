from django.contrib import admin
from .models import EmailSubscriber


@admin.register(EmailSubscriber)
class EmailAdmin(admin.ModelAdmin):
    fields = ('email',)
    list_display = ('email',)
