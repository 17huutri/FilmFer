import { Icon, Button, TextInput, Select, Container, Textarea } from 'react-materialize';
const handleSubmit = (e) => {
    e.preventDefault()
}
export default function Contact() {
    return (
        <Container>
            <h3>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput id="TextInput-38" label="Your Name" />
                <TextInput id="TextInput-39" label="Your Phone" />
                <TextInput email id="TextInput-41" label="Email" validate />
                <Select id="Se1ect—46" multiple={false} onChange={function noRefCheck() { }} value="">
                    <option disabled value="">
                        Choose your favourite nation
                    </option>
                    <option value="1">
                        England
                    </option>
                    <option value="2">
                        France
                    </option>
                    <option value="3">
                        Spain
                    </option>
                </Select>
                <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea—28" label="Your content" />
                <Button>Submit</Button>
            </form>
        </Container>
    );
}