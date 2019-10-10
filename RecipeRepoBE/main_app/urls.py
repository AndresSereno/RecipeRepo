from django.urls import path
from . import views
urlpatterns = [
    path('api/recetas/', views.RecetaListCreate.as_view() ),
    path('api/receta/<int:pk>/', views.RecetaDetail.as_view()),
    path('api/unidades/', views.UnidadesList.as_view() ),
    path('api/receta/<int:pk>/pasos', views.PasosListCreate.as_view()),
    path('api/receta/<int:pk>/ingredientes', views.IngredientesListCreate.as_view()),
    path('api/receta/<int:pk>/valoraciones', views.ValoracionListCreate.as_view()),



    # path('api/receta/{pk}/$', views.RecetaListCreate.as_view() ),


]
