import Modal from './Modal'
import Button from './Button'

function ConfirmDialog({
  open,
  title = 'Confirmar acción',
  description = '¿Seguro que deseas continuar?',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  danger = false,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal open={open} title={title} size="sm" onClose={onCancel}>
      <p className="text-on-surface-variant">{description}</p>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="ghost" onClick={onCancel}>
          {cancelText}
        </Button>

        <Button variant={danger ? 'danger' : 'primary'} onClick={onConfirm}>
          {confirmText}
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmDialog