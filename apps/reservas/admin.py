from django.contrib import admin
from .models import ActividadDeportiva, Horario, Inscripcion

# 1. Registro y personalización del modelo ActividadDeportiva
@admin.register(ActividadDeportiva)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'lugar', 'cupo')
    search_fields = ('nombre', 'lugar')
    list_filter = ('lugar',)

# 2. Registro y personalización del modelo Horario
@admin.register(Horario)
class HorarioAdmin(admin.ModelAdmin):
    list_display = ('actividad', 'dia', 'hora_inicio', 'hora_fin')
    search_fields = ('actividad__nombre', 'dia')
    list_filter = ('dia', 'actividad')

# 3. Registro y personalización del modelo Inscripcion
@admin.register(Inscripcion)
class InscripcionAdmin(admin.ModelAdmin):
    list_display = ('apellido', 'nombre', 'dni', 'horario', 'fecha_inscripcion', 'estado')
    search_fields = ('apellido', 'nombre', 'dni')
    list_filter = ('estado', 'fecha_inscripcion')