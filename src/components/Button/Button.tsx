type ButtonProps = {
  type: 'button' | 'submit'
  title: string
  variant: 'btn_green'| 'btn_login' | 'btn_purple'
  onclick?: string 


}

const Button = ({ type, title, variant,   }: ButtonProps) => {
  return (
    <button className={`button ${variant}`} 

      type={type} >
      <label>
        {title}


      </label>

    </button>
  )
}

export default Button