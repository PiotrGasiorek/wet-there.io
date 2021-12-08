function TabMesage({message}) {
  return (
    <div className='tabMsg'>
        <h2 className='tabMsg__title'>{message.title}</h2>
        <p className='tabMsg__paragraph'>{message.paragraph}</p>
    </div>
  );
}

export default TabMesage;