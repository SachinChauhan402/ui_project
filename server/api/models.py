from django.db import models
from djongo import models

class EmailSubscriber(models.Model):
    email = models.EmailField(unique=True)
