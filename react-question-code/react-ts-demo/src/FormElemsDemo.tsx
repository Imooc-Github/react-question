import React, { FC, useState, ChangeEvent } from 'react'

const Demo: FC = () => {
  //   const [text, setText] = useState<string>('hello')
  //   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //     setText(event.target.value)
  //   }
  //   function genHtml() {
  //     return { __html: text.replaceAll('\n', '<br>') }
  //   }

  //   const [gender, setGender] = useState('female')
  //   function handleChange(event: ChangeEvent<HTMLInputElement>) {
  //     setGender(event.target.value)
  //   }

  //   const [checked, setChecked] = useState(false)
  //   function toggleChecked() {
  //     setChecked(!checked)
  //   }

  // const [selectedCityList, setSelectedCityList] = useState<string[]>([])
  // function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
  //   const city = event.target.value

  //   // state 不可变数据
  //   if (selectedCityList.includes(city)) {
  //     // 移除
  //     setSelectedCityList(
  //       selectedCityList.filter(c => {
  //         if (c === city) return false
  //         return true
  //       })
  //     )
  //   } else {
  //     // 添加
  //     setSelectedCityList(selectedCityList.concat(city))
  //   }
  // }

  // const [lang, setLang] = useState('js')
  // function handleChange(event: ChangeEvent<HTMLSelectElement>) {
  //   setLang(event.target.value)
  // }

  // function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
  //   event.preventDefault() // 组织默认行为
  //   // JS 自己提交数据
  // }

  return (
    <>
      <p>Form elems demo</p>
      <div>
        {/* <form action="/api/post" onSubmit={handleSubmit}>
          <input name="k1" value="v1" />
          <br />
          <textarea name="k2" value="v2" />
          <br />
          <input type="hidden" name="k3" value="v3" />
          <button type="submit">提交</button>
        </form> */}

        {/* <input value={text} onChange={handleChange} /> */}

        {/* <textarea value={text} onChange={handleChange}></textarea>
        <p dangerouslySetInnerHTML={genHtml()}></p> */}

        {/* <select value={lang} onChange={handleChange}>
          <option value="java">Java</option>
          <option value="js">JS</option>
          <option value="css">CSS</option>
        </select> */}

        {/* <label htmlFor="checkbox1">选中</label>
        <input type="checkbox" id="checkbox1" checked={checked} onChange={toggleChecked} /> */}

        {/* <label htmlFor="checkbox1">北京</label>
        <input
          type="checkbox"
          id="checkbox1"
          value="beijing"
          checked={selectedCityList.includes('beijing')}
          onChange={handleCityChange}
        />
        <label htmlFor="checkbox2">上海</label>
        <input
          type="checkbox"
          id="checkbox2"
          value="shanghai"
          checked={selectedCityList.includes('shanghai')}
          onChange={handleCityChange}
        />
        <label htmlFor="checkbox3">深圳</label>
        <input
          type="checkbox"
          id="checkbox3"
          value="shenzhen"
          checked={selectedCityList.includes('shenzhen')}
          onChange={handleCityChange}
        />
        {JSON.stringify(selectedCityList)}
        <input type="hidden" name="cities" value={JSON.stringify(selectedCityList)} /> */}

        {/* <label htmlFor="radio1">男</label>
        <input
          type="radio"
          id="radio1"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
        />
        <label htmlFor="radio2">女</label>
        <input
          type="radio"
          id="radio2"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
        /> */}
      </div>
    </>
  )
}

export default Demo
