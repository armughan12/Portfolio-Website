import { useNavigate } from 'react-router-dom';

function ContactButton() {
    const navigate = useNavigate();

    const goToContactPage = () => {
        navigate('/contact');  // Adjust path if your contact page route is different
    };
}
export default ContactButton;