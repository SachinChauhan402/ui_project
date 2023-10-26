from rest_framework import serializers
from .models import EmailSubscriber


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSubscriber
        fields = '__all__'