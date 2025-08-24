import {useLocale} from "../../shared/hooks/useLocale.ts";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";
import {useState} from "react";
import {supportedLocales, type TLocale} from "../../shared/locale/data.ts";

function Locale() {
    const {locale, changeLocale} = useLocale()
    const uiData = useTranslations()
    const [selectLocaleIsOpen, setSelectLocaleIsOpen] = useState(false)
    const toggleChangeLocaleScreen = () => {
        setSelectLocaleIsOpen(!selectLocaleIsOpen)
    }

    return (
        <>
            <button onClick={toggleChangeLocaleScreen}>{`${locale}`}</button>
            {selectLocaleIsOpen &&
              <div>
                  <h3>{uiData.locale_select_title}</h3>
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