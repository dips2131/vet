import React from 'react'

const  PetHygien = () => {
  const dogsVaccineLsist = ["Rabies Vaccine","Distemper Vaccine","Adenovirus-2 Vaccine","Bordetella (Kennel Cough) Vaccine","Lyme Disease Vaccine","Parainfluenza Vaccine",
     "Leptospirosis Vaccine","Rattlesnake Vaccine","Canine Influenza Vaccine (CIV)","Canine Coronavirus Vaccine"," Giardia Vaccine","Coronavirus Vaccine","Flea and Tick Vaccine",
     "Intestinal Worm Vaccines","Feline Leukemia Vaccine","West Nile Virus Vaccine","Heartworm Preventative","Canine Parvovirus Vaccine","Meningitis Vaccine","Rat-Bite Fever Vaccine"]
  const petHygeneList = [
"Brush their fur regularly: Regularly brushing and combing your dog’s fur and de-matting it helps remove dirt, debris, and excess oils that can cause odors.",
"Give them a bath: Bathing your dog regularly will help keep their fur and skin clean and smelling fresh. Make sure to use a shampoo and conditioner specifically formulated for dogs.",
"Clip their nails: Trimming your dog's nails helps keep them from cracking, splitting, or breaking and reduces the chances of them getting snagged or caught on something.",
"Clean their teeth: Brushing your dog’s teeth at least three times a week can help prevent tartar buildup, inhibit the development of bad breath, and help with overall dental health.",
"Keep their ears clean: Use a cotton ball or swab to clean your dog’s ears with a cleaning solution recommended by your veterinarian.",
"Clean their paws: Dirt and bacteria can accumulate on your dog’s paws. To avoid this, make sure to wipe their paws down with a damp cloth after each outing.",
"Choose the right food: Feeding your pet a healthy, balanced diet will go"];
const commonlyUsedVaccines = [
" Distemper Vaccine: The distemper vaccine protects your dog from the canine distemper virus which is a highly contagious and deadly virus.",
"Adneovirus Vaccine: The adenovirus vaccine protects your dog from canine hepatitis and infectious tracheobronchitis, which are two types of highly contagious upper respiratory diseases.",
"Leptospirosis Vaccine: This vaccine helps protect dogs from leptospirosis, a bacterial disease that is spread through contact with animal urine or water contaminated by infected animals.",
"Parainfluenza Vaccine: This vaccine helps protect against canine parainfluenza, which is a highly contagious virus that can cause inflammation of the upper respiratory system.",
"Parvovirus Vaccine: The parvovirus vaccine helps protect your dog from the parvovirus, which is a highly contagious and potentially deadly virus that attacks the intestines.",
"Rabies Vaccine: The rabies vaccine is required in most places across the US and is intended to protect your dog from rabies, a viral disease that can spread rapidly and is often fatal to both humans and animals.",
"Bordetella Vaccine: The bordetella vaccine is intended to help protect your dog from bordetella, which is a respiratory infection commonly seen in dogs and cats.",
"Lyme Disease Vaccine: The Lyme disease vaccine helps protect against Lyme disease, which is a bacterial infection that is transmitted by infected ticks.",
"Coronavirus Vaccine: The coronavirus vaccine helps protect against canine coronavirus, which is a highly contagious virus that can cause severe diarrhea in dogs.",
"Influenza Vaccine: The influenza vaccine helps protect your dog from the canine influenza viruses, which can cause respiratory disease in dogs."
]
const calc = () => {
  const val = petHygeneList[0].split(":")
  console.log(val)
}
calc();
  return (
    <div className='container'>
      <div>
        <h4>Pet hygiene @home</h4>
        <ol className='list-group'>
        {petHygeneList.map((item) => {
          const splittedlist = item.split(":");
          const header = splittedlist.shift();
          const content = splittedlist.shift();
          return(
          <li className='fw-bold'> <p className='fw-normal'> <span className='fw-bold'> {`${header} :`}</span> {content}</p>
       </li>
          )
        })}
        </ol>
      </div>
      <div>
      <h4>Vaccines for Dogs</h4>
      <ol className='ps-5'>
        {dogsVaccineLsist.map((name,idx) => {
          return(
            <li key={idx}>{name}</li>
          )
        })}
      </ol>
      </div>
      <div>
        <h4>Commonly used vaccines </h4>
        <ol className='list-group'>
        {commonlyUsedVaccines.map((item) => {
          const splittedlist = item.split(":");
          const header = splittedlist.shift();
          const content = splittedlist.shift();
          return(
          <li className='fw-bold'> <p className='fw-normal'> <span className='fw-bold'> {`${header} :`}</span> {content}</p>
       </li>
          )
        })}
        </ol>
      </div>
      <div>
        <h4>Have you Registered your pet?</h4>
        <h5>Do you think Why pets need to be registered?</h5>
        <p>It is a fact that although there is now a rule to register your dog, not many people follow this rule. They continue to keep their pet dogs at home without registering them and sometimes even without renewing the mandatory license annually. Why are we insisting that all furry friends must be registered? Because:</p>
        <div>
          <ol className='ps-5'>
            <li>It is the law and therefore, mandatory.</li>
            <li> It is cheaper to get the license than having to pay the penalty for going without one.</li>
            <li>Proves that your dog has been properly vaccinated.</li>
            <li>It is essential to have your dog registered with the right documentation if you ever plan to enter your pet in dog shows. Your dog will not be accepted otherwise. That is not to say that if you have no intention of having your dog take part in dog shows, you do not need to register your dog.
           </li>
          </ol>
        </div>
      </div>
      <div>
        <h4>How to do Dog Registration in India: A Guide for Pet Parents</h4>
        <p className='text-justify'>
          Contrary to other countries like the US, UK, Italy, New Zealand, Spain, Ireland, etc., India does not have any pan-India law for dog-licenses. But pet owners can get their dogs registered with the local municipal authorities based on their city and state.<br />
        The importance of registering your dog with the proper authorities cannot be overstated. Since there is no countrywide law with regard to registration, it is important to know as much as you can about the municipal authorities in different cities in India and the process of registration.<br />
        Earlier, in many cities, you could even be fined if you failed to register your dog with their municipal corporations; ex.: Lucknow. However, not all cities had such stringent practices. Noida is one of those cities that did not have such a rule, and many people may not have bothered with registration, at all.<br />
        Here’s all the information you need about dog registration in India.
        </p>
        <p className='ps-5'>
        5.The Government of India has made this stipulation that it is forbidden to breed unregistered dogs for dog breeders and potential dog owners.<br />
        6.All pertinent information about your dog can be accessed only with the help of registration that comes along with the microchip. This is critical for dog owners in case your dog goes missing. Tracing and locating your dog and bringing it back home is possible with such information.
        </p>
      </div>
       <div>
        <h4>How to register your dog in India?</h4>
        <p >
          Now that you know why your dog needs to be registered, find out how it can be done.<br />
        There are only two rules. One is to register your dog with KCI (Kennel Club of India), and the other is to register your dog with the local municipality.<br />
        If you have bought your dog from a breeder, you would also have received the KCI certificate with a microchip. This will come with a form called Transfer of Ownership signed by the breeder for the ownership to be transferred to you. You can use this form to submit to the local KCI to register your new dog.<br />
        If you did not receive any certificate from the breeder, you might have to wait for a year before you can get your dog registered with the KCI. You will have to carry postcard-sized photographs of your dog along with the requisite forms for this process.<br />
        Once the registration is completed with the KCI, you will need to go through a similar process with your local municipality. The process varies depending on which city you and your dog live in. It would help for you to visit the local office and take the necessary action.<br />
        Pet Registration Regulations vary from Indian States/Cities you could find the details in the below link  
        </p>
        <a href="https://www.pashudhanpraharee.com/how-to-do-dog-registration-in-india-a-guide-for-pet-parents/" target='blank'>https://www.pashudhanpraharee.com/how-to-do-dog-registration-in-india-a-guide-for-pet-parents/ </a>
       </div>
    </div>
  )
}

export default  PetHygien