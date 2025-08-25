import {useLocale} from "../../shared/hooks/useLocale.ts";
import {useTranslations} from "../../shared/hooks/useTranslations.ts";
import {useState} from "react";
import {supportedLocales} from "../../shared/slices/locale/data.ts";
import {IconButton} from "../../shared/UI/IconButton/IconButton.tsx";
import {LocaleItemButton} from "../../shared/UI/LocaleItemButton/LocaleItemButton.tsx";
import cl from './Locale.module.css'

function Locale() {
    const {locale, changeLocale} = useLocale()
    const uiData = useTranslations()
    const [selectLocaleIsOpen, setSelectLocaleIsOpen] = useState(false)
    const toggleChangeLocaleScreen = () => {
        setSelectLocaleIsOpen(!selectLocaleIsOpen)
    }

    return (
        <div className={cl.locale}>
            <IconButton name={'translate'} handleClick={toggleChangeLocaleScreen} w={30} h={30}></IconButton>
            {selectLocaleIsOpen &&
              <div className={cl.choseLocaleContainer}>
                <p className={cl.choseLocaleTitle}>{uiData.locale_select_title}</p>
                  {supportedLocales.map((e) =>
                      <LocaleItemButton
                          currentLocale={locale}
                          changeLocale={changeLocale}
                          setState={toggleChangeLocaleScreen}
                      >
                          {e}
                      </LocaleItemButton>
                  )}
              </div>}
        </div>
    );
}

export default Locale;