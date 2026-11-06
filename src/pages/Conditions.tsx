import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

type Cond = {
  id: string; num: string; title: string;
  seek?: string;
  overview: string[];
  treatment: string;
  symptoms: string[];
};

const CONDITIONS: Cond[] = [
  {
    id: 'depression', num: '01', title: 'Depression',
    seek: 'If you or someone you care about has been experiencing several of these symptoms for more than two weeks, it is time to speak to a specialist. Depression does not go away on its own, and the sooner help is sought, the better the outcome.',
    overview: [
      'Depression is one of the most common — and most misunderstood — mental health conditions in the world. It is far more than sadness or a low mood. Depression is a medical condition that affects how you think, feel, and function, sometimes making even the simplest tasks feel impossible.',
      "In India, depression is frequently underdiagnosed and undertreated — particularly in Karnataka, where stigma and lack of awareness can prevent people from seeking the help they need. At Viveka in Mysore, we see many families who have spent years struggling before finally reaching out. You do not have to wait.",
    ],
    treatment: 'We offer a comprehensive approach to depression that goes beyond medication. Treatment may include antidepressant therapy (reviewed and monitored carefully), individual psychotherapy such as CBT, lifestyle and sleep interventions, family counselling, and — in severe or treatment-resistant cases — ECT (Electroconvulsive Therapy) delivered safely by our trained team.',
    symptoms: [
      'Persistent low mood or sadness for more than two weeks',
      'Loss of interest or pleasure in activities once enjoyed',
      'Changes in sleep — sleeping too much or too little',
      'Fatigue and low energy',
      'Difficulty concentrating or making decisions',
      'Feelings of worthlessness or excessive guilt',
      'Changes in appetite and weight',
      'Physical symptoms with no clear medical cause — headaches, body pain, digestive problems',
      'Thoughts of death or suicide (seek help immediately if this is present)',
    ],
  },
  {
    id: 'bipolar', num: '02', title: 'Bipolar Disorder',
    seek: 'If you or a family member is experiencing extreme mood swings, periods of unusually high energy followed by crashes, or behaviour that is noticeably out of character, a specialist evaluation is important.',
    overview: [
      'Bipolar disorder is characterised by significant shifts in mood — from periods of intense energy, elevated mood, and reduced need for sleep (mania or hypomania), to episodes of deep depression. These episodes can disrupt relationships, work, finances, and life in profound ways.',
      'With the right diagnosis and long-term management, most people with bipolar disorder are able to live stable, fulfilling lives. Early intervention and sustained care make a significant difference.',
    ],
    treatment: 'Our approach to bipolar disorder includes mood-stabilising medication, careful monitoring, psychoeducation for patients and families, individual therapy, and relapse prevention planning. We also support families in understanding the condition and how to respond during episodes.',
    symptoms: [
      'Elevated or irritable mood',
      'Racing thoughts and rapid speech',
      'Reduced need for sleep without feeling tired',
      'Grandiose beliefs or inflated self-esteem',
      'Impulsive or risky behaviour',
      'Depressive episodes carry similar symptoms to depression (see above)',
    ],
  },
  {
    id: 'schizophrenia', num: '03', title: 'Schizophrenia & Psychosis',
    seek: 'Psychosis is a medical emergency. If someone appears to have lost touch with reality, is distressed, or is behaving in a way that puts themselves or others at risk, please contact us immediately.',
    overview: [
      'Schizophrenia and other psychotic disorders involve a disconnect from reality — hallucinations (hearing or seeing things others do not), delusions (strong false beliefs), and disorganised thinking. These experiences are distressing for the person living through them and deeply frightening for families.',
      'Psychosis can be treated. With the right medication, rehabilitation, and family support, many people with schizophrenia are able to live meaningful, stable lives.',
    ],
    treatment: 'Treatment includes antipsychotic medication, close monitoring, rehabilitation therapy to rebuild daily functioning, family psychoeducation, and long-term follow-up. Our residential programme is particularly well-suited to supporting recovery from psychosis.',
    symptoms: [
      'Hearing voices or seeing things that are not there',
      'Strongly held beliefs that others do not share and cannot be reasoned with',
      'Disorganised or confused speech and thinking',
      'Withdrawal from social life and relationships',
      'Neglect of personal hygiene and daily functioning',
      'Flat or blunted emotional expression',
    ],
  },
  {
    id: 'anxiety', num: '04', title: 'Anxiety & Trauma-Related Disorders',
    seek: 'When anxiety is affecting your ability to work, maintain relationships, or simply get through the day, professional help is warranted. You do not have to live like this.',
    overview: [
      'Anxiety is the most common mental health condition globally — and yet it is also one of the most undertreated. Whether it is generalised anxiety, panic disorder, social anxiety, or trauma-related conditions like PTSD, anxiety can become completely debilitating if left unaddressed.',
    ],
    treatment: 'We offer evidence-based psychological therapies including CBT, trauma-focused CBT, EMDR-informed approaches, and mindfulness-based interventions, alongside medication where appropriate.',
    symptoms: [
      'Excessive worry that is difficult to control',
      'Physical symptoms — racing heart, breathlessness, sweating, trembling',
      'Panic attacks — sudden, intense episodes of fear',
      'Avoidance of situations or places',
      'Flashbacks, nightmares, or intrusive memories (PTSD)',
      "Hypervigilance — always feeling 'on edge'",
    ],
  },
  {
    id: 'addiction', num: '05', title: 'Substance Use Disorders & Addiction',
    seek: 'If substance use is causing harm and the person is unable to stop on their own, professional help is needed. Detoxification without medical supervision can be dangerous — please reach out to us before attempting to stop suddenly.',
    overview: [
      'Addiction — whether to alcohol, opioids, cannabis, prescription drugs, or other substances — is a chronic, relapsing medical condition. It is not a lack of willpower. It is a condition that affects the brain, behaviour, and relationships, and it responds to treatment.',
      'At Viveka, we offer a non-judgmental, evidence-based approach to addiction treatment for individuals and families across Mysore and Karnataka.',
    ],
    treatment: 'Our de-addiction programme includes medically supervised detox, dual-diagnosis assessment, individual and group therapy, family counselling, relapse prevention, and long-term aftercare.',
    symptoms: [
      'Inability to control or stop substance use',
      'Continued use despite harm to health, relationships, or work',
      'Cravings and preoccupation with obtaining the substance',
      'Withdrawal symptoms when not using',
      'Increasing tolerance — needing more to achieve the same effect',
      'Neglect of responsibilities and relationships',
    ],
  },
  {
    id: 'dementia', num: '06', title: 'Dementia & Memory-Related Disorders',
    seek: 'If you are noticing consistent memory changes in a family member — especially if they are affecting daily life — an early assessment is strongly recommended. Early diagnosis allows for better planning, management, and support.',
    overview: [
      'Dementia is not a single disease — it is an umbrella term for a group of conditions that cause progressive decline in memory, thinking, language, and behaviour. Alzheimer\'s disease is the most common form, but there are many others.',
      "In Mysore and Karnataka, dementia is still widely misunderstood — often dismissed as 'just old age.' But early diagnosis and appropriate management can make a significant difference to quality of life for both the person with dementia and their family.",
    ],
    treatment: 'Led by Dr. Murali Krishna — one of Karnataka\'s most experienced geriatric psychiatrists — our dementia service offers specialist assessment and diagnosis, pharmacological management, behavioural symptom management, caregiver support, and home-based follow-up.',
    symptoms: [
      'Memory loss — particularly for recent events',
      'Difficulty finding words or following conversations',
      'Getting lost in familiar places',
      'Confusion about time, date, or place',
      'Changes in personality, mood, or behaviour',
      'Difficulty with daily tasks — cooking, managing finances, personal hygiene',
    ],
  },
  {
    id: 'personality', num: '07', title: 'Personality Disorders',
    seek: 'If patterns of thinking and relating are causing consistent distress or are repeatedly damaging your relationships and opportunities, a specialist assessment is the right first step.',
    overview: [
      'Personality disorders involve long-standing patterns of thinking, feeling, and behaving that cause significant distress and difficulty in relationships and daily life. They are often misunderstood — and those living with them can feel deeply misunderstood too.',
      'With the right therapeutic approach, many people with personality disorders experience significant improvement in quality of life and relationships.',
    ],
    treatment: 'We offer specialist psychological therapies including Dialectical Behaviour Therapy (DBT) and schema-focused approaches, alongside psychiatric review and family support.',
    symptoms: [
      'Intense and unstable relationships',
      'Difficulty managing emotions',
      'Impulsive or self-destructive behaviour',
      'A distorted or unstable sense of self',
      'Significant interpersonal difficulties',
    ],
  },
  {
    id: 'poststroke', num: '08', title: 'Post-Stroke & Neuropsychiatric Disorders',
    seek: 'Post-stroke neuropsychiatric symptoms are often not recognised or treated. If you or a family member has experienced a stroke and is showing any of the above, a specialist assessment at Viveka can make a significant difference.',
    overview: [
      'A stroke does not only affect the body — it frequently affects mood, cognition, behaviour, and personality. Post-stroke depression, anxiety, emotionalism, and cognitive impairment are extremely common and significantly affect recovery and quality of life.',
      'At Viveka, our integrated team — psychiatrists, physiotherapists, and speech therapists — are uniquely equipped to support the full spectrum of post-stroke recovery.',
    ],
    treatment: 'Our transdisciplinary team provides coordinated psychiatric, psychological, physiotherapy, and speech therapy care — all in one place.',
    symptoms: [
      'Depression or anxiety following a stroke',
      'Emotional instability — crying or laughing without obvious reason',
      'Memory and concentration difficulties',
      'Personality or behavioural changes',
      'Difficulty with speech, language, or swallowing',
      'Physical weakness or coordination problems',
    ],
  },
  {
    id: 'ocd', num: '09', title: 'Obsessive-Compulsive Disorder (OCD)',
    seek: 'OCD rarely resolves on its own and tends to worsen over time without treatment. The sooner professional help is sought, the easier it is to treat.',
    overview: [
      'OCD involves unwanted, intrusive thoughts (obsessions) and repetitive behaviours or mental rituals (compulsions) performed to relieve the anxiety those thoughts cause. OCD can be exhausting and all-consuming — taking up hours every day and affecting every aspect of life.',
    ],
    treatment: 'The gold-standard treatment for OCD is Exposure and Response Prevention therapy (ERP), a specialised form of CBT, combined with medication where needed. Our psychologists are trained in this approach.',
    symptoms: [
      'Intrusive, disturbing thoughts that are difficult to dismiss',
      'Repetitive checking, cleaning, counting, or arranging',
      'Mental rituals — repeating prayers, phrases, or sequences in the mind',
      'Significant distress if rituals are interrupted or delayed',
      'Substantial time lost each day to obsessions and compulsions',
    ],
  },
  {
    id: 'neurodevelopmental', num: '10', title: 'Neurodevelopmental Disorders',
    seek: 'If you are concerned about your child\'s development, or if an adult has always struggled with attention, social interaction, or learning in a way that seems different, an assessment can provide clarity and open doors to the right support.',
    overview: [
      'Neurodevelopmental disorders — including ADHD, autism spectrum disorder (ASD), intellectual disability, and learning disorders — affect how the brain develops and functions. These conditions are often identified in childhood but may go unrecognised into adulthood.',
      'At Viveka, we offer specialist assessment and support for children, adolescents, and adults with neurodevelopmental conditions — and for their families.',
    ],
    treatment: 'We offer comprehensive psychological assessment, psychiatric evaluation, parent training, individual therapy, and school or workplace liaison support.',
    symptoms: [
      'Difficulty with attention, concentration, or impulse control (ADHD)',
      'Challenges with social communication and interaction (ASD)',
      'Sensory sensitivities',
      'Rigid routines or specific interests',
      'Delays in speech, language, or learning',
    ],
  },
  {
    id: 'sleep', num: '11', title: 'Sleep Disorders',
    overview: [
      'Sleep is foundational to mental and physical health. Chronic insomnia, hypersomnia, and other sleep disorders are not just inconvenient — they profoundly affect mood, cognition, physical health, and quality of life. Sleep disorders are also closely intertwined with psychiatric conditions.',
    ],
    treatment: 'We offer assessment and management of sleep disorders including insomnia, hypersomnia, and sleep disorders related to psychiatric conditions. CBT for Insomnia (CBT-I) is available, alongside medication management where appropriate.',
    symptoms: [
      'Difficulty falling asleep or staying asleep',
      'Waking too early and being unable to return to sleep',
      'Excessive daytime sleepiness despite adequate night sleep',
      'Restless or unrefreshing sleep',
      'Significant impact on daily functioning',
    ],
  },
  {
    id: 'eating', num: '12', title: 'Eating Disorders',
    seek: 'Eating disorders can become medically dangerous. If you recognise these patterns in yourself or someone you love, please reach out to us. Early intervention significantly improves outcomes.',
    overview: [
      'Eating disorders — including anorexia nervosa, bulimia nervosa, and binge eating disorder — are serious mental health conditions with significant physical health consequences. They are about far more than food; they are deeply linked to emotions, self-worth, and psychological distress.',
    ],
    treatment: 'Treatment combines psychiatric assessment, nutritional support, and psychological therapy including CBT and family-based approaches. Inpatient admission may be recommended in severe cases.',
    symptoms: [
      'Severely restricted eating or extreme dieting',
      'Binge eating — consuming large amounts of food in a short time',
      'Purging behaviours — vomiting, laxatives, excessive exercise',
      'Intense fear of weight gain or distorted body image',
      'Physical signs — fatigue, fainting, dental erosion, hair loss',
    ],
  },
  {
    id: 'somatoform', num: '13', title: 'Somatoform & Medically Unexplained Symptoms',
    overview: [
      'Many people experience genuine, distressing physical symptoms — pain, fatigue, gastrointestinal problems, dizziness — for which repeated medical tests find no physical cause. These symptoms are real, not "imagined," and are often rooted in psychological distress.',
    ],
    treatment: 'We offer specialist assessment to understand the relationship between physical symptoms and psychological factors, followed by an integrated treatment plan combining psychological therapy and appropriate medical management.',
    symptoms: [
      'Persistent physical symptoms with no clear medical explanation',
      'Multiple consultations across specialties without a diagnosis',
      'Significant distress and preoccupation with physical health',
      'Symptoms that worsen during periods of emotional stress',
    ],
  },
  {
    id: 'sexual', num: '14', title: 'Sexual Disorders',
    overview: [
      'Sexual health is an important part of overall wellbeing, and difficulties in this area — including sexual dysfunction, concerns about sexual behaviour, and issues related to sexual identity and health — deserve the same non-judgmental, professional care as any other health condition.',
    ],
    treatment: 'Our psychiatrists and psychologists provide confidential, sensitive assessments and treatment for a range of sexual health concerns. We approach this area with complete professionalism and without judgment.',
    symptoms: [],
  },
  {
    id: 'conduct', num: '15', title: 'Disruptive & Conduct Disorders',
    overview: [
      'Disruptive behaviour disorders — including Oppositional Defiant Disorder (ODD) and Conduct Disorder — are among the most common psychiatric conditions in children and adolescents. They can place enormous strain on families and schools, and without appropriate support, can have long-term consequences.',
    ],
    treatment: 'Treatment combines parent management training, individual therapy for the child, school liaison, and — where needed — psychiatric assessment and medication. Family involvement is central.',
    symptoms: [
      'Persistent defiance and hostility towards authority figures',
      'Frequent angry outbursts or temper tantrums beyond expected age',
      'Deliberately annoying others or blaming others for mistakes',
      'Aggressive behaviour towards people or animals',
      'Serious rule violations — truancy, running away, stealing',
    ],
  },
];

export default function Conditions() {
  return (
    <>
      <PageHero
        eyebrow="Conditions We Treat"
        title={<>Understanding Your Condition is the <em>First Step.</em></>}
        description="We treat the full spectrum of neuropsychiatric and mental health conditions. Every page below follows the same structure: overview, symptoms, when to seek help, and our treatment approach at Viveka."
      />

      <div className="cond-index">
        <div className="container">
          <span className="index-label">Jump to a condition</span>
          <div className="cond-index-grid">
            {CONDITIONS.map(c => (
              <a key={c.id} href={`#${c.id}`} className="cond-pill">{c.title}</a>
            ))}
          </div>
        </div>
      </div>

      {CONDITIONS.map((c, i) => (
        <section key={c.id} id={c.id} className={`cond-block ${i % 2 === 0 ? 'odd' : 'even'}`}>
          <div className="container">
            <div className="cond-header">
              <div className="cond-title-col">
                <span className="cond-number">{c.num}</span>
                <h2>{c.title}</h2>
                {c.seek && (
                  <div className="cond-seek">
                    <span className="seek-label">When to Seek Help</span>
                    <p>{c.seek}</p>
                  </div>
                )}
              </div>
              <div className="cond-body-cols">
                <div className="cond-overview">
                  <span className="col-label">Overview</span>
                  {c.overview.map((p, idx) => <p key={idx}>{p}</p>)}
                  <div className="treatment-box" style={{ marginTop: 20 }}>
                    <span className="col-label">Treatment Approach at Viveka</span>
                    <p>{c.treatment}</p>
                  </div>
                </div>
                <div>
                  {c.symptoms.length > 0 && (
                    <>
                      <span className="col-label">Symptoms</span>
                      <ul className="symptom-list">
                        {c.symptoms.map((s, idx) => (
                          <li key={idx}><i className="fas fa-circle" /> {s}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTAStrip />
    </>
  );
}