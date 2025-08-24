import {useLocale} from "../../shared/hooks/useLocale.ts";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";
import {useState} from "react";
import {supportedLocales, type TLocale} from "../../shared/locale/data.ts";
import {Icon} from "../../shared/UI/Icon/Icon.tsx";

function Locale() {
    const {locale, changeLocale} = useLocale()
    const uiData = useTranslations()
    const [selectLocaleIsOpen, setSelectLocaleIsOpen] = useState(false)
    const toggleChangeLocaleScreen = () => {
        setSelectLocaleIsOpen(!selectLocaleIsOpen)
    }

    return (
        <>
            {/**/}
            <button onClick={toggleChangeLocaleScreen}><Icon name={'translate'} />{`${locale}`}</button>
            {selectLocaleIsOpen &&
              <div>
                  <p>{uiData.locale_select_title}</p>
                  {supportedLocales.map((e) =>
                      <button onClick={() => {
                          changeLocale(e as TLocale)
                          setSelectLocaleIsOpen(false)
                      }} key={e}>{e}</button>
                  )}
              </div>}
        </>
    );
}

export default Locale;