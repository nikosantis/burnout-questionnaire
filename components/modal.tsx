'use client'

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import html2canvas from 'html2canvas'
import { BurnoutValues } from 'lib/burnout/types'

type ResultType = {
  value: string
  text: string
  result: number
  originalResult: BurnoutValues
  signs: string
}

type ModalProps = {
  show: boolean
  onClose: () => void
  onReset: () => void
  title: string
  information: string
  content: {
    evaluatedAspect: string
    total: string
    signs: string
    emotionalExhaustion: ResultType
    depersonalisation: ResultType
    personalFulfillment: ResultType
  }
  cancelText: string
  downloadText: string
}

export default function Modal({
  show,
  onClose,
  title,
  information,
  content,
  cancelText,
  downloadText
}: ModalProps) {
  const printRef = useRef<HTMLDivElement>(null)

  const handleDownloadImage = async () => {
    const element = printRef.current
    if (element) {
      const canvas = await html2canvas(element, {
        ignoreElements: ignoreEl => ignoreEl.id === 'modalButtons',
        useCORS: true,
        allowTaint: true,
        removeContainer: true,
        logging: false
      })
      const data = canvas.toDataURL('image/jpg')
      const link = document.createElement('a')

      if (typeof link.download === 'string') {
        link.href = data
        link.download = 'burnout-result.jpg'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        window.open(data)
      }
    }
  }
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'
                ref={printRef}
              >
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  {title}
                </Dialog.Title>

                <div className='mt-2'>
                  <p className='text-sm text-gray-500 mb-6'>{information}</p>
                  <div className='rounded-md w-full overflow-x-auto'>
                    <table className='table-auto w-full border-collapse'>
                      <thead className='rounded-t-md bg-gray-100'>
                        <tr>
                          <th className='text-sm py-3 px-6' scope='col'>
                            {content.evaluatedAspect}
                          </th>
                          <th
                            className='text-center text-sm py-3 px-6'
                            scope='col'
                          >
                            {content.total}
                          </th>
                          <th
                            className='text-center text-sm py-3 px-6'
                            scope='col'
                          >
                            {content.signs}
                          </th>
                        </tr>
                      </thead>

                      <tbody className='bg-gray-50'>
                        <tr>
                          <td
                            className='py-4 px-6 font-medium text-sm'
                            scope='row'
                          >
                            {content.emotionalExhaustion.text}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {content.emotionalExhaustion.result}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {content.emotionalExhaustion.value} <br />
                            <small>({content.emotionalExhaustion.signs})</small>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className='py-4 px-6 font-medium text-sm'
                            scope='row'
                          >
                            {content.depersonalisation.text}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {content.depersonalisation.result}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {content.depersonalisation.value}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className='py-4 px-6 font-medium text-sm'
                            scope='row'
                          >
                            {content.personalFulfillment.text}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {content.personalFulfillment.result}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {content.personalFulfillment.value}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='mt-4 flex justify-between' id='modalButtons'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors'
                    onClick={handleDownloadImage}
                  >
                    {downloadText}
                  </button>

                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-colors'
                    onClick={onClose}
                  >
                    {cancelText}
                  </button>
                </div>

                <div className='mt-4 w-full'>
                  <p className='text-sm text-gray-400 text-center'>
                    Image created on http://localhost:3000/ <br />
                    by Nikolas Santis
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
