import React from 'react'
import PropTypes from 'prop-types'
import { CustomBoxFullWidth } from '../../styled-components/CustomStyles.style'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { useTranslation } from 'react-i18next'
import { useTheme } from "@mui/material/styles";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const CustomSelectWithFormik = (props) => {

    const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	  };
	  if (typeof window !== 'undefined') {
        TagManager.initialize(tagManagerArgs);
      
        useEffect(() => {
          TagManager.dataLayer({
            event: 'pageview',
            path: '/'
          });
        }, []);
      }

    ReactGA.initialize(TRACKING_ID);

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
    }, []);

    const {
        inputLabel,
        selectFieldData,
        passSelectedValue,
        touched,
        errors,
        fieldProps,
        required,
        value,
    } = props
    const [age, setAge] = React.useState(value)
    const theme = useTheme()
    const { t } = useTranslation()
    const handleChange = (event) => {
        passSelectedValue(event.target.value)
        setAge(event.target.value)
    }



    return (
        <CustomBoxFullWidth>
            <FormControl fullWidth>
                <InputLabel
                    required={required}
                    id="demo-simple-select-label"
                    sx={{ color: (theme) => theme.palette.neutral[1000] }}
                >
                    {inputLabel}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={inputLabel}
                    onChange={handleChange}
                    error={Boolean(touched && errors)}
                    helperText={touched && errors}
                    {...fieldProps}
                >
                    {selectFieldData?.length > 0 &&
                        selectFieldData.map((item, index) => {
                            return (
                                <MenuItem key={index} value={item.value} sx={{

                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                    },
                                }}>
                                    {t(item.label)}
                                </MenuItem>
                            )
                        })}
                </Select>
                {touched && errors && !value && (
                    <FormHelperText
                        sx={{ color: (theme) => theme.palette.error.main }}
                    >
                        {t('Please select an option.')}
                    </FormHelperText>
                )}
            </FormControl>
        </CustomBoxFullWidth>
    )
}

CustomSelectWithFormik.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    selectFieldData: PropTypes.array.isRequired,
    passSelectedValue: PropTypes.func.isRequired,
}

export default CustomSelectWithFormik
