import { FormEvent, useState } from "react";
import Modal from 'react-modal';

function WaitList() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [City, setCity] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState({ file: '', status: '', desc: '', color: '' })

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            width: '30%',
            paddingBottom: '0px',
            paddingRight: '0px',
            paddingLeft: '0px'
        },
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const options: RequestInit = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "waitList": {
                    "name": name,
                    "location": City,
                    "phoneNumber": phoneNumber,
                    "email": email
                }
            })
        }

        fetch('http://backend.toxmo.in:3000/api/waitList', options)
            .then(response => {
                if (response.status !== 201) {
                    setIsOpen(true)
                    setModalContent({
                        file: 'failure.png',
                        status: 'FAILURE',
                        desc: 'Unable to process the request, Please try again after sometime',
                        color: '#fd5765'
                    })
                    return
                }
                return response.json()
            })
            .then(_ => {
                setIsOpen(true)
                setModalContent({
                    file: 'success.png',
                    status: 'SUCCESS',
                    desc: 'Thank you for your interest in our services. We will notify you as soon as we expand operations to your city',
                    color: '#1bc27a'
                })
            })
            .catch(_ => {
                setIsOpen(true)
                setModalContent({
                    file: 'failure.png',
                    status: 'FAILURE',
                    desc: 'Unable to process the request, Please try again after sometime',
                    color: '#fd5765'
                })
            })
    }
    return (
        <section style={{ backgroundColor: '#ffd500', color: 'white' }} id="waitlist">
            <div className="container">
                <h3 style={{ textAlign: "center", padding: '2.9rem', color: '#1b1b1b', fontWeight: 400, lineHeight: 1.6 }}>
                    YOUR HUNGRY IS FULFILLED IN SPECIAL WAY
                </h3>
                <h2 style={{ fontSize: '3rem', fontWeight: "bold", textAlign: "center", paddingBottom: '2rem' }}>Join the Waitlist</h2>
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={() => { setIsOpen(false) }}
                    style={customStyles}
                    contentLabel="form submission modal"
                >   <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                        <div style={{ width: '20%', margin: '0 auto' }}>
                            <img src={`/assets/${modalContent.file}`} />
                        </div>
                        <h2 style={{ textAlign: 'center', color: modalContent.color, fontWeight: 'bold', lineHeight: '3.2' }}>{modalContent.status}</h2>
                        <p style={{ textAlign: 'center', paddingBottom: '.5rem' }}>{modalContent.desc}</p>
                    </div>
                    <div onClick={() => { setIsOpen(false) }} style={
                        { height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: modalContent.color, color: 'white' }
                    }>
                        Continue
                    </div>
                </Modal>
                <form onSubmit={handleSubmit} className="waitlist__form flex-col" style={{ rowGap: '1.5rem', paddingBottom: '35px' }}>
                    <input type="text" name="name" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                    <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" name="phone-no" id="phone-no" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} required minLength={10} maxLength={10} />
                    <input type="text" name="city" id="city" placeholder="City" onChange={(e) => setCity(e.target.value)} required />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit">
                            <span style={{ color: 'white', fontSize: '16px' }}>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </section >
    )
}

export default WaitList
