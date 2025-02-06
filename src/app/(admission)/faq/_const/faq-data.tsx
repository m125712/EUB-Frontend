import { IFAQ } from '@/types';
import Link from 'next/link';

const faqData: IFAQ[] = [
  {
    question: 'What programs does EUB offer?',
    answer: (
      <div className='space-y-4'>
        <div>
          <p className='text-lg'>
            <strong>Faculty of Business Administration</strong>
          </p>
          <ul className='mt-1 pl-8 list-disc  space-y-1'>
            <li>Bachelor of Business Administration</li>
            <li>Master of Business Administration</li>
            <li>Master of Business Administration (1 Year Program)</li>
            <li>Executive Master of Business Administration</li>
            <li>Bachelor of Tourism and Hospitality Management</li>
          </ul>
        </div>
        <div>
          <p className='text-lg'>
            <strong>Faculty of Arts and Social Sciences</strong>
          </p>
          <ul className='mt-1 pl-8 list-disc  space-y-1'>
            <li>Bachelor of Arts (Honors) in English</li>
            <li>Master of Arts (Final) in English</li>
            <li>Bachelor of Social Sciences in Economics</li>
            <li>Master of Social Sciences in Economics</li>
            <li>Bachelor of Laws (LL.B. Honors)</li>
            <li>Master of Laws (LL.M.)</li>
          </ul>
        </div>
        <div>
          <p className='text-lg'>
            <strong>Faculty of Engineering</strong>
          </p>
          <ul className='mt-1 pl-8 list-disc  space-y-1'>
            <li>Bachelor of Civil Engineering</li>
            <li>Bachelor of Textile Engineering</li>
            <li>Bachelor of Computer Science Engineering</li>
            <li>Bachelor of Electrical and Electronics Engineering</li>
            <li>Bachelor of Industrial Production Engineering</li>
            <li>Bachelor of Mechanical Engineering</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question:
      'What are the minimum qualifications for Undergraduate Admission?',
    answer: (
      <div className='space-y-4'>
        <div>
          <p className='text-lg'>
            <strong>Minimum Academic Qualifications</strong>
          </p>
          <ul className='mt-1 pl-8 list-disc  space-y-1'>
            <li>
              Combined GPA of 6.0 in both SSC and HSC with a minimum GPA of 2.5
              in each OR
            </li>
            <li>
              O-Levels and A-Levels: A minimum of five O-Level subjects with an
              Average Grade Point of at least 2.5 and two A-Level subjects with
              an Average Grade Point of at least 2.0. A maximum of one ‘E’ grade
              is allowed across both O-Levels and A-Levels combined. (Grading
              scale: A = 5, B = 4, C = 3, D = 2, E = 1) OR
              <ul className='pl-4 list-decimal list-inside'>
                <li>
                  LL.B. (Honors) degree or completion of LL.M. (Preliminary)
                  required.
                </li>
              </ul>
            </li>
            <li>
              US High School Diploma, IB Diploma Program (IB-DP) or equivalent.
            </li>
            <li>
              Students with academic qualifications other than the above need to
              contact the Admissions Office to check their eligibility.
            </li>
            <li>
              Foreign Applicants: candidates must meet academic qualifications
              equivalent to Bangladeshi students. Foreign candidates without
              security clearance from their respective Embassy or High
              Commission in Bangladesh are not eligible to apply.
            </li>
            <li>
              Credit transfer is allowed between EUB and other institutions if
              course equivalencies are met.
            </li>
          </ul>
        </div>
        <div>
          <p className='text-lg'>
            <strong>Specific Program Requirements</strong>
          </p>
          <ul className='mt-1 pl-8 list-disc  space-y-1'>
            <li>
              For <strong>B.A. (Honors) in English Program</strong>, minimum 2nd
              division or CGPA of 2.5 in SSC/Dakhil and HSC/Alim, O-Level: CGPA
              of 2.00 in five subjects; A-Level: CGPA of 2.0 in two subjects,
              minimum 45% marks in English at the SSC/HSC level. Students with a
              gap in studies or post-school qualifications (Diplomas, Advanced
              Diplomas) may receive credit recognition.
            </li>
            <li>
              For all <strong>Engineering Programs</strong> of the School of
              Engineering & Physical Sciences, candidates
              <ul className='list-decimal pl-8'>
                <li>
                  must pass SSC and HSC in Science with at least a 2nd division
                  in both, OR
                </li>
                <li>
                  Math & Physics with a minimum C and E grade respectively in
                  A-Levels, OR
                </li>
                <li>
                  Math and Physics with a minimum C grade in O-Levels AND must
                  have Math or Physics with a minimum C grade in A-Levels to be
                  eligible to apply. Math and Physics with a minimum C grade in
                  O-Levels AND must have Math or Physics with a minimum C grade
                  in A-Levels to be eligible to apply.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'What are the minimum qualifications for Postgraduate Admission?',
    answer: (
      <div className='space-y-4'>
        <div>
          <p className='text-lg'>
            <strong>Postgraduate Program Requirements</strong>
          </p>
          <ul className='mt-1 pl-8 list-disc  space-y-1'>
            <li>
              <strong>MBA Program</strong>

              <ul className='mt-1 pl-8 space-y-1 list-decimal'>
                <li>
                  A bachelor’s degree from a recognized university is required.
                </li>
                <li>Must have TOEFL (550) & GMAT (500) scores.</li>
                <li>
                  For the <strong>EMBA Program</strong>, work experience in an
                  executive position is preferred.
                </li>
              </ul>
            </li>
            <li>
              <strong>M.A. in English</strong>

              <ul className='mt-1 pl-8 space-y-1 list-decimal'>
                <li>
                  B.A. (Honors) in English or completion of M.A. (Preliminary)
                  in English required.
                </li>
              </ul>
            </li>
            <li>
              <strong>Master of Laws (LL.M.)</strong>

              <ul className='mt-1 pl-8 space-y-1 list-decimal'>
                <li>
                  LL.B. (Honors) degree or completion of LL.M. (Preliminary)
                  required.
                </li>
                <li>
                  LL.M. (Preliminary): requires LL.B. Pass (Two-Year Bachelor of
                  Laws).
                </li>
                <li>
                  LL.M. (Final): requires LL.B. (Honors) or LL.M. (Preliminary).
                </li>
              </ul>
            </li>
            <li>
              <strong>M.S.S. in Economics</strong>

              <ul className='mt-1 pl-8 space-y-1 list-decimal'>
                <li>
                  Four-year B.S.S. (Honors) in Economics students can join
                  directly at the Second Year Level.
                </li>
                <li>
                  Three-year B.S.S. (Honors) or B.A. (Pass) degree holders must
                  complete the two-year MSS program.
                </li>
                <li>
                  Students with a study gap of over two years must undertake the
                  full two-year MSS program.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'From where can the prospective students get the admission form?',
    answer: (
      <>
        Candidate has to fill up the application form online. It is advisable
        for the candidate to have a signature and picture scanned copy before
        applying. For online application click{' '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/online-admission'}
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What are the admission, tuition, and other fees?',
    answer: (
      <>
        <p>
          Admission Fee: <strong>Tk. 10,000</strong> (non-refundable).
          <br />
          See{' '}
          <Link
            target='_blank'
            className='text-primary underline'
            href={'/financial-information'}
          >
            Financial Information
          </Link>{' '}
          for more details.
        </p>
      </>
    ),
  },
  {
    question: 'How many subjects can I enroll in a semester?',
    answer: (
      <p>
        Students typically take a minimum of 15 credits (5 courses) and a
        maximum of 27 credits (9 courses) per semester. However, this depends on
        the department and the student’s CGPA.
      </p>
    ),
  },
  {
    question: 'What should I do to get financial aid or a scholarship?',
    answer: (
      <p>
        Financial aid and scholarships are awarded based on academic merit. For
        more details, visit:{' '}
        <Link
          target='_blank'
          className='text-primary underline'
          href={'/financial-information'}
        >
          Financial Information
        </Link>
      </p>
    ),
  },
  {
    question:
      'Can I take admission before my HSC or A-Level result is published?',
    answer: (
      <p>
        Candidates can apply before their HSC/A-Level result is published.
        However, the result must be provided before completing the admission
        process.
      </p>
    ),
  },
  {
    question: `I've submitted the application form. Now I want to change the program. What will be the procedure?`,
    answer: (
      <p>
        Candidates must email the Admissions Office of EUB with their name and
        details about the new program they wish to select.
      </p>
    ),
  },
  {
    question: 'Which program should I choose at EUB?',
    answer: (
      <p>
        It completely depends on the student’s interests. EUB prioritizes all
        programs equally. All faculty members have completed their Masters from
        esteemed institutions.
      </p>
    ),
  },
  {
    question:
      "I've submitted the application form. Now I want to change the program. What will be the procedure?",
    answer: (
      <>
        Candidates must email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>{' '}
        with their name, confirmation code, and details about the new program
        they wish to select.
      </>
    ),
  },
  {
    question: 'Which program should I choose at NSU?',
    answer: (
      <>
        It completely depends on the student’s interests. NSU prioritizes all
        programs equally. All faculty members have completed their master&apos;s
        from esteemed foreign institutions.
      </>
    ),
  },
  {
    question: 'When will my original certificates be verified?',
    answer: (
      <>
        During the verification process, candidates must provide the original
        copies of SSC & HSC or &apos;O&apos; & &apos;A&apos; level results for
        verification.
      </>
    ),
  },
  {
    question:
      'What will be my career path after completing an undergraduate program at North South University?',
    answer: (
      <>
        Graduates from NSU are academically qualified to face challenges in
        their professional lives.
      </>
    ),
  },
  {
    question: 'How can I get admission information about NSU?',
    answer: (
      <>
        Admission information is available on the NSU admission website:{' '}
        <a href='http://admissions.northsouth.edu'>admissions.northsouth.edu</a>
        . Alternatively, you can call 880-2-55668200 ext. 4001 or email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>
        .
      </>
    ),
  },
  {
    question:
      'How many times does the admission test take place in a year at NSU?',
    answer: (
      <>The admission test is held twice a year, once for each semester.</>
    ),
  },
  {
    question:
      'I just finished my A-Levels exam, and my result will be published after the admission test takes place. Can I sit for the test?',
    answer: (
      <>
        A-Levels (appeared) candidates may sit for the admission test based on
        an undertaking that they will only be admitted after passing the A-Level
        exam and presenting the required minimum GPA.
      </>
    ),
  },
  {
    question: 'What is the procedure to waive the admission test?',
    answer: (
      <>
        Admission test waivers are available for eligible candidates with:
        <ul>
          <li>SAT score of 1150 (1600 scale) or 1700 (2400 scale)</li>
          <li>IELTS score of 7.0</li>
          <li>
            TOEFL scores: Paper-Based Test (PBT) 563, Computer-Based Test (CBT)
            223, or Internet-Based Test (IBT) 85
          </li>
        </ul>
        Note: Candidates who waive the admission test with IELTS or TOEFL scores
        cannot apply for BS Economics, BPharm, or engineering programs (B.Arch.,
        CSE, EEE, CEE).
      </>
    ),
  },
  {
    question: 'Where can I get the admission form?',
    answer: (
      <>
        Candidates can access the admission form online at{' '}
        <a href='http://admissions.northsouth.edu'>admissions.northsouth.edu</a>
        .
      </>
    ),
  },
  {
    question:
      'What should I do if I face problems with the admission form submission?',
    answer: (
      <>
        Candidates can call the NSU Office of Admissions at 880-2-55668200 ext.
        4001 or email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>{' '}
        for assistance.
      </>
    ),
  },
  {
    question: 'How to pay the admission form fee after applying?',
    answer: (
      <>
        Admission form fees can be paid through:
        <ul>
          <li>bKash, DBBL mobile banking (Rocket), VISA, MasterCard</li>
          <li>
            Payment at any branch of the following banks:
            <ul>
              <li>Southeast Bank</li>
              <li>One Bank</li>
              <li>Mutual Trust Bank</li>
              <li>UCBL</li>
            </ul>
          </li>
        </ul>
        Candidates must carry their application code while paying.
      </>
    ),
  },
  {
    question:
      'I made a mistake while filling out the admission form. What should I do?',
    answer: (
      <>
        Candidates should call 880-2-55668200 ext. 4001 or email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>{' '}
        with details of the issue to get assistance.
      </>
    ),
  },
  {
    question: 'What should I bring during the verification process?',
    answer: (
      <>
        Candidates must bring the following original documents along with
        photocopies:
        <ul>
          <li>
            SSC & HSC or &apos;O&apos; & &apos;A&apos; level result documents
            (certificates and mark sheets)
          </li>
          <li>HSC registration card and/or passport</li>
          <li>National ID (if available)</li>
          <li>
            Two passport-sized photographs of the candidate and one
            passport-sized photograph of each parent
          </li>
          <li>Photocopies of parents&apos; National ID or passport</li>
        </ul>
      </>
    ),
  },
  {
    question:
      'Can diploma students apply for the undergraduate admission test?',
    answer: (
      <>
        Diploma students should contact the admissions office at 880-2-55668200
        ext. 5002, 5004, or 4001 for eligibility details.
      </>
    ),
  },
  {
    question: 'How many years of study gap does NSU accept?',
    answer: (
      <>
        <ul>
          <li>
            General programs: Study gaps exceeding 5 years are not accepted.
          </li>
          <li>
            Pharmacy program: Study gaps exceeding 2 years are not accepted.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'What should a fresher bring for advising (course registration)?',
    answer: (
      <>
        Freshers must bring their offer letter and bank slip for advising
        (course registration).
      </>
    ),
  },
  {
    question: 'What are the Pharmacy professional requirements?',
    answer: (
      <>
        For BPharm, candidates must have:
        <ul>
          <li>
            Physics, Chemistry, and Biology with a minimum ‘A’ grade in
            SSC/Equivalent and HSC/Equivalent
          </li>
          <li>
            Physics, Chemistry, and Biology with a minimum ‘B’ grade in A-Levels
          </li>
        </ul>
      </>
    ),
  },
];

export default faqData;
