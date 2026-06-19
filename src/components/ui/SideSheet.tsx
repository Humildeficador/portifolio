import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import { cx } from 'class-variance-authority'

function SideSheetRoot({ children, ...props }: Dialog.DialogProps) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>
}

function SideSheetTrigger({ children }: { children: ReactNode }) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>
}

interface ContentProps {
  children: ReactNode
  className?: string
}

function SideSheetContent({ children, className }: ContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />

      <Dialog.Content
        className={cx(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xl border-l border-slate-800 bg-gray-950 p-6 flex flex-col focus:outline-none transition ease-in-out",
          className
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

interface HeaderProps {
  title: string
}

function SideSheetHeader({ title }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 shrink-0">
      <Dialog.Title className="text-xl font-bold text-slate-100">
        {title}
      </Dialog.Title>

      <Dialog.Close asChild>
        <button
          type="button"
          className="rounded-sm opacity-70 ring-offset-gray-950 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        >
          <X className="h-6 w-6 text-slate-400 hover:text-white" />
          <span className="sr-only">Fechar</span>
        </button>
      </Dialog.Close>
    </div>
  )
}

function SideSheetBody({ children }: { children: ReactNode }) {
  return <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">{children}</div>
}

function SideSheetFooter({ children }: { children: ReactNode }) {
  return <div className="mt-6 pt-6 border-t border-slate-800 shrink-0">{children}</div>
}

export const SideSheet = Object.assign(SideSheetRoot, {
  Trigger: SideSheetTrigger,
  Content: SideSheetContent,
  Header: SideSheetHeader,
  Body: SideSheetBody,
  Footer: SideSheetFooter
})