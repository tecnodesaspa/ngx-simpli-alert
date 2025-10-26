# NgxSimpliAlert

Una librería Angular simple y elegante para mostrar alertas modales personalizables con animaciones suaves y múltiples tipos de mensajes.

![Angular](https://img.shields.io/badge/Angular-18+-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-blue?logo=typescript)
![npm](https://img.shields.io/npm/v/ngx-simpli-alert)
![License](https://img.shields.io/npm/l/ngx-simpli-alert)

## 🚀 Características

- ✅ **Fácil de usar**: Integración simple con solo unas líneas de código
- 🎨 **Múltiples tipos**: Success, Warning, Danger y Question
- 🎭 **Animaciones**: Transiciones suaves con CSS animations
- 📱 **Responsive**: Diseño adaptativo para dispositivos móviles
- 🔧 **Personalizable**: Títulos, descripciones y botones configurables
- 🚫 **Sin dependencias**: Solo requiere Angular core y common
- 🎯 **TypeScript**: Completamente tipado para mejor experiencia de desarrollo

## 📦 Instalación

```bash
npm install ngx-simpli-alert
```

## 🛠️ Configuración

### 1. Importar el servicio

```typescript
import { NgxSimpliAlertService } from 'ngx-simpli-alert';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor(private alertService: NgxSimpliAlertService) {}
}
```

### 2. Usar en tu componente

```typescript
showSuccessAlert() {
  this.alertService.show({
    title: '¡Éxito!',
    description: 'La operación se completó correctamente',
    type: 'success',
    confirmButtonText: 'Aceptar'
  });
}

showConfirmAlert() {
  this.alertService.show({
    title: '¿Estás seguro?',
    description: 'Esta acción no se puede deshacer',
    type: 'question',
    confirmButtonText: 'Sí, continuar',
    cancelButtonText: 'Cancelar'
  }, 
  () => {
    // Acción al confirmar
    console.log('Confirmado');
  },
  () => {
    // Acción al cancelar
    console.log('Cancelado');
  });
}
```

## 📋 API Reference

### AlertOptions Interface

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `title` | `string` | No | Título principal de la alerta |
| `description` | `string` | No | Descripción o mensaje de la alerta |
| `type` | `'success' \| 'danger' \| 'question' \| 'warning'` | No | Tipo de alerta (por defecto: 'success') |
| `confirmButtonText` | `string` | No | Texto del botón de confirmación |
| `cancelButtonText` | `string` | No | Texto del botón de cancelación |
| `isActive` | `boolean` | No | Estado de visibilidad (manejado internamente) |

### NgxSimpliAlertService

#### Métodos

##### `show(options: AlertOptions, onConfirm?: () => void, onCancel?: () => void)`

Muestra una alerta modal con las opciones especificadas.

**Parámetros:**
- `options`: Configuración de la alerta
- `onConfirm` (opcional): Callback ejecutado al confirmar
- `onCancel` (opcional): Callback ejecutado al cancelar

## 🎨 Tipos de Alertas

### Success
```typescript
this.alertService.show({
  title: '¡Operación exitosa!',
  description: 'Los datos se guardaron correctamente',
  type: 'success',
  confirmButtonText: 'Entendido'
});
```

### Warning
```typescript
this.alertService.show({
  title: 'Advertencia',
  description: 'Algunos campos requieren atención',
  type: 'warning',
  confirmButtonText: 'Revisar'
});
```

### Danger
```typescript
this.alertService.show({
  title: 'Error',
  description: 'No se pudo completar la operación',
  type: 'danger',
  confirmButtonText: 'Intentar de nuevo'
});
```

### Question
```typescript
this.alertService.show({
  title: '¿Eliminar elemento?',
  description: 'Esta acción no se puede deshacer',
  type: 'question',
  confirmButtonText: 'Eliminar',
  cancelButtonText: 'Cancelar'
}, 
() => this.deleteItem(),
() => console.log('Cancelado')
);
```

## 🎯 Ejemplos Avanzados

### Alerta con solo título
```typescript
this.alertService.show({
  title: 'Mensaje simple',
  type: 'success'
});
```

### Alerta sin botones (se cierra automáticamente)
```typescript
this.alertService.show({
  title: 'Guardando...',
  description: 'Procesando información',
  type: 'warning'
});

// Cerrar después de 3 segundos
setTimeout(() => {
  // La alerta se cerrará automáticamente cuando se muestre otra
}, 3000);
```

### Manejo de promesas
```typescript
async confirmAction() {
  return new Promise((resolve) => {
    this.alertService.show({
      title: '¿Continuar?',
      description: 'Esta acción modificará los datos',
      type: 'question',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    },
    () => resolve(true),
    () => resolve(false)
    );
  });
}

// Uso
const confirmed = await this.confirmAction();
if (confirmed) {
  // Ejecutar acción
}
```

## 🎨 Personalización de Estilos

La librería incluye estilos por defecto, pero puedes sobrescribirlos en tu CSS global:

```css
/* Personalizar el fondo del modal */
.alert-background {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

/* Personalizar el contenido de la alerta */
.alert-content {
  border-radius: 10px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
}

/* Personalizar botones */
.alert-content button {
  border-radius: 8px !important;
  font-weight: bold !important;
}
```

## 🔧 Desarrollo

### Requisitos
- Angular 18+
- TypeScript 5.5+
- Node.js 18+

### Comandos de desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

# Ejecutar pruebas
npm test

# Construir la librería
npm run build
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si encuentras algún problema o tienes preguntas:

- Abre un [issue](https://github.com/tecnodesaspa/ngx-simpli-alert/issues)
- Consulta la documentación
- Revisa los ejemplos de uso

---

**Desarrollado con ❤️ para la comunidad Angular**
