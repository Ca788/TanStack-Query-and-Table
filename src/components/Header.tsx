export const Header = () => {

  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
      <div className='flex gap-4 items-center'>
        <button className='cursor-pointer' onClick={handleClick}>Home</button>
        <button className='cursor-pointer'>Entrar</button>
      </div>
      <div>Login</div>
    </div>
  );
};