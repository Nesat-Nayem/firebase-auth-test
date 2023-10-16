import React from 'react'
import { HeroArea } from '../HeroArea/HeroArea'
import  EventList  from '../../Components/EventList/EventList';
import Speker from '../Speker/Speker';
import StatsSection from '../StatsSection/StatsSection';
const speakersData = [
  { name: 'Michael A. Brown', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/4f02b43d51ca806b2736884d435a90e7cdf5e0b2.jpg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
  { name: 'Najwa Aaraj', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/cb52bf9e774b3d73e7205e862eb8f45751a8ac62.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
  { name: 'Richard Abbott', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/29bcf82f5d540e332cee827e35af214235e77335.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
  { name: 'Zee Abdelnabi', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/aeda36d2cb62d80a9c52c9eec94fa328d2d534dc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
  { name: 'Michael A. Brown', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/925a75ddb6476e2621faa17565a3d4afb1ef99f4.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
  { name: 'Andrea Abell', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/563097a2bfc979042eadac1c6ea1be483892ecd4.jpeg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
  { name: 'Valerie Abend', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/6890877bfff3af84e99bd190b80f1052c7367c08.jpg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
  { name: 'Jared Ablon', image: 'https://web-summit-avenger.imgix.net/production/avatars/original/f11ede13dbebbac616e3c67861fb70b2edc8d0d0.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300' },
];
const Home = () => {
  return (
    <div>

      <HeroArea></HeroArea>
      <h2 className='mt-10 text-2xl font-bold mb-10'>Our Services</h2>
      <EventList></EventList>
      <h2 className='mt-10 text-2xl font-bold mb-10'>Meet our 2023 speakers. We're adding more every week.</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
      {speakersData.map((speaker, index) => (
        <Speker key={index} {...speaker} />
      ))}
    </div>

    <StatsSection></StatsSection>

    </div>
  )
}

export default Home