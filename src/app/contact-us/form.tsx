"use client"

import React, { useState }  from 'react'

import styles from "@/app/contact-us/contact.module.css"

export default function Form() {
  
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value;
      if (selectedValue === '') {
        alert('Please choose a valid option');
      } else {
        setSelectedOption(selectedValue);
      }
    };
  
    return (
    
        <div className={styles.contactFormContactOuter}>
        <form>

            <div className={styles.inpName}>
                <label className={styles.label}>Name *</label>
                <input
                    type="text" 
                    className={styles.inputName} 
                    name="user_name" 
                    id="fname2"
                />
            </div>

            <div className={styles.inpMobile}>
                <label className={styles.label}>Mobile *</label>
                <input
                    type="number"
                    className={styles.inputMobile} 
                    title="Please enter a valid mobile number" 
                    pattern="[1-9]{1}[0-9]{9}" 
                    name="user_number" 
                    id="Phonenum" 
                    maxLength={10}
                    minLength={10}
                />
            </div>

            <div className={styles.inpEmail}>
                <label className={styles.label}>Email *</label>
                <input
                    typeof='email' 
                    className={styles.inputEmail}
                    name="email" 
                    id="Email"
                />
            </div>

            <div className={styles.inpOption}>
                <label className={styles.label}>Programme</label>
                <select value={selectedOption} className={styles.inputOption} onChange={handleOptionChange}>
                    <option value=""disabled className={styles.inputOptionop} >Select your program</option>
                    <option value="Option 1" className={styles.inputOptionop} >Online </option>
                    <option value="Option 2" className={styles.inputOptionop} >Offline</option>
                </select>
            </div>

            <div className={styles.checkBox}>
                <label className={styles.checkBoxLabel}>
                    <input type="checkbox" name="agreement" className={styles.checkBoxMark}/>
                        I authorize Masters&apos; Union to contact me with updates via Calls, SMS, WhatsApp and Emails. This will override my registry on DND/NDNC.
                </label>
            </div>

            <div className={styles.formBtton}>      
                <button type="submit" className={styles.heroButton} value="Send">
                    Next
                </button>
            </div>
        </form> 
    </div>
  )
}
