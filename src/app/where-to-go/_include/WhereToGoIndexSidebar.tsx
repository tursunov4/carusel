import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";
import Image from "next/image";
import checkmarkIcon from "@/assets/img/icons/checkmark.svg";
import {fakeWhereToGoFilters} from "@/dummy-data/fakeWhereToGoFilters";


export default function WhereToGoIndexSidebar() {
    return (
        <aside className="sidebar">
            {/* todo объединить в компонент sidebar */}
            <BaseCard className="sidebar-content no-bottom-header scrollable" isExpanded={false} mobileCardHeader="Фильтры">
                <div className="filters">

                    {/* todo get filters from DB */}
                    {/* todo loop через блоки фильтров, внутри сами фильтры */}
                    <div className="sidebar-item filters-block">
                        <div className="title">{fakeWhereToGoFilters.blockName}</div>
                        <div className="filters-list">

                            <div className="filter-item">
                                <label>
                                    <input type="checkbox"/>
                                    <div className="checkmark">
                                        <Image src={checkmarkIcon} alt="отметка фильтра"
                                               width={16} height={17}/>
                                    </div>
                                    Все
                                </label>
                            </div>

                            {/* todo loop по сабфильтрам */}
                            {fakeWhereToGoFilters.filters && fakeWhereToGoFilters.filters.map((filter) => (
                                <div key={filter.id} className="filter-item">
                                    <label>
                                        <input type="checkbox"/>
                                        <div className="checkmark"><Image src={checkmarkIcon} alt="отметка фильтра"
                                                                          width={16} height={17}/></div>
                                        {filter.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="reset-button">
                    <button type="button" className="btn btn-moderate btn-outline">
                        Сбросить фильтры
                        {/* todo подсчёт количества полученных результатов по фильтру */}
                        <span className="count-items">12</span>
                    </button>
                </div>

            </BaseCard>
        </aside>
    );
}



