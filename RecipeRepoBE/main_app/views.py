from rest_framework import generics

from main_app.serializers import *
from main_app.models import *



class RecetaListCreate(generics.ListCreateAPIView):
    queryset = Receta.objects.all()
    serializer_class = RecetasSerializer

class RecetaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Receta.objects.all()
    serializer_class = RecetaSerializer

class UnidadesList(generics.ListAPIView):
    queryset = Unidades.objects.all()
    serializer_class = UnidadesSerializer

class IngredientesListCreate(generics.ListCreateAPIView):
    queryset = Ingredientes.objects.all()
    serializer_class = IngredientesSerializer

class ValoracionListCreate(generics.ListCreateAPIView):
    queryset = Valoracion.objects.all()
    serializer_class = ValoracionSerializer

class PasosListCreate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pasos.objects.all()
    serializer_class = PasosSerializer