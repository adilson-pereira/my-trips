import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Teste',
          slug: 'teste',
          location: {
            latitude: -32,
            longitude: -52
          }
        }
      ]}
    />
  )
}
