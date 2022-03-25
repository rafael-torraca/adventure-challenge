import notfound from '../assets/images/not-found.png';

export const NotFound = () => {
  return (
    <>
      <div style={{ marginTop: 50, textAlign: 'center', justifyContent: 'center' }}>
        <img src={notfound} alt="Not Found" style={{ width: '10%' }} />
        <h1>404 - Not Found!</h1>
      </div>
    </>
  )
}
