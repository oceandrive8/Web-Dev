from django.urls import path
from .views import CompanyListView, CompanyDetailView, VacancyListByCompanyView, VacancyListView, VacancyDetailView, top_ten_vacancies

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='companies-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='companies-detail'),
    path('companies/<int:id>/vacancies/', VacancyListByCompanyView.as_view(), name='companies-vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancies-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancies-detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='vacancies-top-ten'),
]



