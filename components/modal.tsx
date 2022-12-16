'use client'

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import html2canvas from 'html2canvas'

import { useTranslate } from 'lib/contexts/translate'

type ModalProps = {
  show: boolean
  onClose: () => void
  emotionalExhaustionResult: number
  emotionalExhaustionValue: string
  personalFulfillmentResult: number
  personalFulfillmentValue: string
  depersonalisationResult: number
  depersonalisationValue: string
}

export default function Modal({
  show,
  onClose,
  emotionalExhaustionResult,
  emotionalExhaustionValue,
  personalFulfillmentResult,
  personalFulfillmentValue,
  depersonalisationResult,
  depersonalisationValue
}: ModalProps) {
  const {
    resultTranslate: {
      title,
      information,
      evaluatedAspect,
      total,
      signs,
      depersonalisation,
      depersonalisationSigns,
      emotionalExhaustion,
      emotionalExhaustionSigns,
      personalFulfillment,
      personalFulfillmentSigns,
      downloadText,
      cancelText,
      imageCreated
    }
  } = useTranslate()
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
      <Dialog
        as='div'
        className='relative z-10 text-slate-900 dark:text-slate-200'
        onClose={() => {}}
      >
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
                className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all'
                ref={printRef}
              >
                <Dialog.Title as='h3' className='text-lg font-medium leading-6'>
                  {title}
                </Dialog.Title>

                <div className='mt-2'>
                  <p className='text-sm mb-6'>{information}</p>
                  <div className='rounded-md w-full overflow-x-auto'>
                    <table className='table-auto w-full border-collapse rounded-2xl'>
                      <thead className='rounded-t-md bg-slate-500 dark:bg-slate-900 text-white'>
                        <tr>
                          <th className='text-sm py-3 px-6' scope='col'>
                            {evaluatedAspect}
                          </th>
                          <th
                            className='text-center text-sm py-3 px-6'
                            scope='col'
                          >
                            {total}
                          </th>
                          <th
                            className='text-center text-sm py-3 px-6'
                            scope='col'
                          >
                            {signs}
                          </th>
                        </tr>
                      </thead>

                      <tbody className='bg-slate-100 dark:bg-slate-700 rounded-b-2xl'>
                        <tr className='border-b border-slate-300 dark:border-slate-600'>
                          <td
                            className='py-4 px-6 font-medium text-sm border-r border-slate-300 dark:border-slate-600'
                            scope='row'
                          >
                            {emotionalExhaustion}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center border-r border-slate-300 dark:border-slate-600'>
                            {emotionalExhaustionResult}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {emotionalExhaustionValue} <br />
                            <small>({emotionalExhaustionSigns})</small>
                          </td>
                        </tr>
                        <tr className='border-b border-slate-300 dark:border-slate-600'>
                          <td
                            className='py-4 px-6 font-medium text-sm border-r border-slate-300 dark:border-slate-600'
                            scope='row'
                          >
                            {depersonalisation}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center border-r border-slate-300 dark:border-slate-600'>
                            {depersonalisationResult}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {depersonalisationValue}
                            <br />
                            <small>({depersonalisationSigns})</small>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className='py-4 px-6 font-medium text-sm border-r border-slate-300 dark:border-slate-600'
                            scope='row'
                          >
                            {personalFulfillment}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center border-r border-slate-300 dark:border-slate-600'>
                            {personalFulfillmentResult}
                          </td>
                          <td className='py-4 px-6 font-medium text-sm text-center'>
                            {personalFulfillmentValue}
                            <br />
                            <small>({personalFulfillmentSigns})</small>
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
                  <p className='text-sm text-center'>{imageCreated}</p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
