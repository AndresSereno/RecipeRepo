from rest_framework import serializers

from main_app.models import Unidades
from main_app.models import Ingredientes
from main_app.models import Pasos
from main_app.models import Valoracion
from main_app.models import Receta



class UnidadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unidades
        fields = '__all__'

class IngredientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredientes
        fields = '__all__'

class PasosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pasos
        fields = '__all__'

class ValoracionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Valoracion
        fields = ("fecha","valoracion")

class RecetasSerializer(serializers.ModelSerializer):
    valoraciones = ValoracionSerializer(many=True)
    class Meta:
        model = Receta
        fields = ("nombre","valoraciones")

    def create(self, validated_data):
        receta = Receta(nombre=validated_data.get("nombre"))
        receta.save()
        valoraciones = validated_data.get("valoracion")
        for valoracion in valoraciones:
            Receta.objects.create(receta=receta,**valoracion)
        return validated_data

class RecetaSerializer(serializers.ModelSerializer):
    valoraciones = ValoracionSerializer(many=True)
    ingredientes = IngredientesSerializer(many=True)
    pasos = PasosSerializer(many=True)
    class Meta:
        model = Receta
        fields = ("nombre","porciones","valoraciones","ingredientes","pasos")

    def create(self, validated_data):
        receta = Receta(nombre=validated_data.get("nombre"),porciones=validated_data.get("porciones"))
        receta.save()
        valoraciones = validated_data.get("valoracion")
        for valoracion in valoraciones:
            Receta.objects.create(receta=receta, **valoracion)


        ingredientes = validated_data.get("ingrediente")
        for ingrediente in ingredientes:
            Receta.objects.create(receta=receta,**ingrediente)


        pasos = validated_data.get("paso")
        for paso in pasos:
            Receta.objects.create(receta=receta, **paso)

        return validated_data