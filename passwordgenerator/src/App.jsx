import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passfn = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (specialAllowed) str += "!@#$%&*"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      console.log(pass);
    }

    setPassword(pass)
  }, [length, numberAllowed, specialAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    alert("Password Copied")
  }, [password])
  useEffect(() => {
    passfn()
  }, [length, numberAllowed, specialAllowed, passfn])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-xl rounded-lg px-4 py-2 m-8 text-orange-400 bg-gray-700'>
        <h1 className='text-3xl m-5'>Password Generator</h1>
        <div class="flex w-full items-center space-x-2">
          <input
            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-md'
            placeholder='Password'
            readOnly

          />
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='mt-3'>
          <input
            type='range'
            min={8}
            max={64}
            value={length}
            className='cursor-pointer accent-orange-400'
            onChange={(e) => { setLength(e.target.value) }}
          />
        </div>

        <label>Length : {length}</label>


        <ul class="grid w-full gap-6 md:grid-cols-2 mt-4 mb-4 select-none">

          <li>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              class="hidden peer"
              readOnly
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />

            <label for="numberInput" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 
            peer-checked:bg-orange-400
            hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div class="block">
                <div class="w-full text-lg font-bold text-center">Numbers</div>
                <div class="w-full text-sm">To make your password stronger. This adds numbers in your password.</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              defaultChecked={specialAllowed}
              id="specialCharsAllowed"
              value=""
              class="hidden peer"
              onChange={() => {
                setSpecialAllowed((prev) => !prev)
              }}
            />
            <label for="specialCharsAllowed" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:bg-orange-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div class="block">

                <div class="w-full text-lg font-bold">Special Character</div>
                <div class="w-full text-sm">To boost your password strength. This includes special characters in your password</div>
              </div>
            </label>
          </li>
        </ul>

      </div>
    </>
  )
}

export default App
