from django.urls import path
from .views import CompanyListView, CompanyDetailView, VacancyListByCompanyView, VacancyListView, VacancyDetailView, top_ten_vacancies

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', VacancyListByCompanyView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='vacancy-top-ten'),
]


