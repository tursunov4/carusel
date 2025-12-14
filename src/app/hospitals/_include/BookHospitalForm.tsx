import Input from "@/components/elements/Input";
import Modal from "@/components/modal/Modal";

export default function BookHospitalForm(
    {tourId, closeModal, submitModal}
    : { tourId: number | null, closeModal: () => void, submitModal: () => void }) {
    return (
        <Modal
            show={tourId !== null}
            onClose={closeModal}
            title="Запись на консультацию">
            <form>

                <div className="f-group">
                    <label htmlFor="phone">Номер телефона</label>
                    <Input name="phone" id="phone" type="tel" inputMode="tel" placeholder="Введите значение" required/>
                </div>
                <div className="f-group">
                    <label htmlFor="email">Email <span>Необязательно</span></label>
                    <Input name="email" id="email" type="email" placeholder="Введите значение"/>
                </div>
                <div className="f-group">
                    <label htmlFor="message">Ваше сообщение <span>Необязательно</span></label>
                    <Input name="message" id="message" placeholder="Введите значение"/>
                </div>

                <div className="f-group buttons">
                    <button type="button" className="btn btn-orange btn-outline" onClick={closeModal}>Отменить</button>
                    <button type="button" className="btn btn-orange btn-primary" onClick={submitModal}>Отправить
                    </button>
                </div>

            </form>
        </Modal>
    );
}


