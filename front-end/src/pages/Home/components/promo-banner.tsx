export default function PromoBanner({...props}) {
  return (
    <img 
    height={0} 
    width={0} 
    className='h-auto w-full mt-5 p-5' sizes='100vw'
    {...props}/>
  )
}
