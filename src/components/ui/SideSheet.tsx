import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'

interface SideSheetProps {
  children: ReactNode
}

export function SideSheet({ children }: SideSheetProps) {
  return (
    <Dialog.Root>
        {children}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xl border-l border-slate-800 bg-gray-950 p-6 shadow-2xl transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md flex flex-col focus:outline-none">
          
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-bold text-slate-100">
              Detalhes do Projeto
            </Dialog.Title>
            
            <Dialog.Close asChild>
              <button 
                type="button" 
                className="cursor-pointer rounded-sm opacity-70 ring-offset-gray-950 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 disabled:pointer-events-none"
              >
                <X className="h-6 w-6 text-slate-400 hover:text-white" />
                <span className="sr-only">Fechar</span>
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto">
            <p className="text-slate-400">Conteúdo estático por enquanto.</p>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}