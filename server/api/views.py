from django.shortcuts import render, HttpResponse
from .models import EmailSubscriber
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .seriallizers import EmailSerializer
import csv


class EmailView(APIView):
    def get(self, request):
        context = {}
        status_code = status.HTTP_200_OK
        try:
            query = EmailSubscriber.objects.all()
            serializer = EmailSerializer(query, many=True)
            context['data'] = serializer.data
            context['status'] = True
            status_code = status.HTTP_200_OK
            context['message'] = []
        except Exception as e:
            context['data'] = []
            context['status'] = False
            status_code = status.HTTP_400_BAD_REQUEST
            context['message'] = str(e)
        return Response(context, status=status_code)

    def post(self, request):
        context = {}
        status_code = status.HTTP_200_OK
        try:
            serializer = EmailSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                context['data'] = serializer.data
                context['status'] = True
                status_code = status.HTTP_201_CREATED
                context['message'] = []
            else:
                context['data'] = []
                context['status'] = False
                status_code = status.HTTP_400_BAD_REQUEST
                context['message'] = serializer.errors
        except Exception as e:
            context['status'] = False
            context['data'] = []
            status_code = status.HTTP_400_BAD_REQUEST
            context['message'] = str(e)
        return Response(context, status=status_code)


class EmailById(APIView):
    def get_object(self, pk):
        try:
            email = EmailSubscriber.objects.get(id=pk)
            return email
        except Exception as e:
            return False

    def get(self, request, pk=None):
        context = {}
        status_code = status.HTTP_200_OK
        try:
            email = self.get_object(pk)
            if email:
                serializer = EmailSerializer(email)
                context['data'] = serializer.data
                context['status'] = True
                status_code = status.HTTP_200_OK
                context['message'] = []
            else:
                context['data'] = []
                context['status'] = False
                status_code = status.HTTP_400_BAD_REQUEST
                context['message'] = 'Object Does Not Exists'
        except Exception as e:
            context['status'] = False
            context['data'] = []
            status_code = status.HTTP_400_BAD_REQUEST
            context['message'] = str(e)
        return Response(context, status=status_code)

    def put(self, request, pk=None):
        context = {}
        status_code = status.HTTP_200_OK
        try:
            email = self.get_object(pk)
            if email:
                serializer = EmailSerializer(email, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    context['data'] = serializer.data
                    context['status'] = True
                    status_code = status.HTTP_201_CREATED
                    context['message'] = "Email saved successfully"
                else:
                    context['data'] = []
                    context['status'] = False
                    status_code = status.HTTP_400_BAD_REQUEST
                    context['message'] = serializer.errors
            else:
                context['data'] = []
                context['status'] = False
                status_code = status.HTTP_400_BAD_REQUEST
                context['message'] = "Object Does Not Exist"
        except Exception as e:
            context['status'] = False
            context['data'] = []
            status_code = status.HTTP_400_BAD_REQUEST
            context['message'] = "Object Does Not Exist"
        return Response(context, status=status_code)

    def delete(self, request, pk=None):
        context = {}
        status_code = status.HTTP_200_OK
        try:
            email = self.get_object(pk)
            if email:
                email.delete()
                context['data'] = []
                context['status'] = True
                status_code = status.HTTP_200_OK
                context['message'] = "Email Deleted Successfully."
            else:
                context['data'] = []
                context['status'] = False
                status_code = status.HTTP_400_BAD_REQUEST
                context['message'] = "Object Does Not Exist."
        except Exception as e:
            context['status'] = False
            context['data'] = []
            status_code = status.HTTP_400_BAD_REQUEST
            context['message'] = str(e)
        return Response(context, status=status_code)


class CsvEmailView(APIView):
    
    def get(self, request):
        context = {}
        status_code = status.HTTP_200_OK
        try:
            query = EmailSubscriber.objects.all()

            response = HttpResponse(content_type="text/csv")
            response["Content-Disposition"] = "attachment; filename='all_emails.csv'"
            writer = csv.DictWriter(response, fieldnames=["email"])
            writer.writeheader()
            for email in query:
                writer.writerow({"email": email.email})
            return response

        except Exception as e:
            context['data'] = []
            context['status'] = False
            status_code = status.HTTP_400_BAD_REQUEST
            context['message'] = str(e)
        return Response(context, status=status_code)


class CsvEmailById(APIView):

    def get_object(self, pk):
        try:
            email = EmailSubscriber.objects.get(id=pk)
            return email
        except Exception as e:
            return False

    def get(self, request, pk=None):
        context = {}
        status_code = status.HTTP_200_OK
        try:
            email = self.get_object(pk)
            if email:
                response = HttpResponse(content_type="text/csv")
                response["Content-Disposition"] = "attachment; filename='emails.csv'"
                writer = csv.DictWriter(response, fieldnames=["email"])
                writer.writeheader()
                writer.writerow({"email": email.email})
                return response
            else:
                context['data'] = []
                context['status'] = False
                status_code = status.HTTP_400_BAD_REQUEST
                context['message'] = 'Object Does Not Exists'
        except Exception as e:
            context['status'] = False
            context['data'] = []
            status_code = status.HTTP_400_BAD_REQUEST
            context['message'] = str(e)
        return Response(context, status=status_code)

