import Input from "@/components/elements/Input";
import Modal from "@/components/modal/Modal";
import Image from "next/image";
import minusIcon from "@/assets/img/icons/minus-01.svg";
import plusIcon from "@/assets/img/icons/plus-01.svg";
import {useState} from "react";

export default function BookTourForm(
    {tourId, closeModal, submitModal}
    : { tourId: number | null, closeModal: () => void, submitModal: () => void }) {

    const [guestCount, setGuestCount] = useState(1)
    const guestInc = () => {
        setGuestCount(prevState => prevState + 1);
    }
    const guestDec = () => {
        setGuestCount(prevState => Math.max(1, prevState - 1));
    }

    return (
        <Modal
            show={tourId !== null}
            onClose={closeModal}
            title="Бронирование экскурсионного тура">
            <form>
                <div className="f-group">
                    <Input required label={{text: "Дата экскурсии", props: {htmlFor: "book-date"}}}
                           name="book_date" id="book-date" type="date"/>
                </div>

                {/* todo переделать форму в форма плюс и минус с фигмы */}
                <div className="f-group">
                    <div className="flex flex-row flex-wrap gap-12 justify-between items-center">
                        <div>Количество гостей</div>
                        <div className="plus-minus">
                            <div className="minus" onClick={guestDec}>
                                <Image src={minusIcon} alt="добавить убавить" width={16} height={16}/>
                            </div>

                            <div className="counter">{guestCount}</div>

                            <div className="plus" onClick={guestInc}>
                                <Image src={plusIcon} alt="добавить убавить" width={16} height={16}/>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="f-group">
                    <label htmlFor="author-name">Имя</label>
                    <Input required name="author_name" id="author-name" placeholder="Введите значение"/>
                </div>
                <div className="f-group">
                    <label htmlFor="phone">Номер телефона</label>
                    <Input required name="phone" id="phone" type="tel" inputMode="tel" placeholder="Введите значение"/>
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


