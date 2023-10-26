from django.urls import path
from . import views


urlpatterns = [
    path('email_subscribers', views.EmailView.as_view(), name='email_subscribers'),
    path('email_subscribers/<int:pk>', views.EmailById.as_view()),
    path('email_subscribers_csv', views.CsvEmailView.as_view(), name='email_subscribers_csv'),
    path('email_subscribers_csv/<int:pk>', views.CsvEmailById.as_view(), name='email_subscribers_csv_byid')
]