/**
 * ***************************************************************************
 * Copyright (c) 2010 Qcadoo Limited
 * Project: Qcadoo MES
 * Version: 0.1
 *
 * This file is part of Qcadoo.
 *
 * Qcadoo is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation; either version 3 of the License,
 * or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * ***************************************************************************
 */

package com.qcadoo.mes.view.components;

/**
 * View value of LookupComponent.
 * 
 * @see com.qcadoo.mes.view.components.LookupComponent
 * @see com.qcadoo.mes.view.ViewValue
 */
public final class LookupData extends SimpleValue {

    private String selectedEntityValue;

    private String selectedEntityCode;

    private Long contextEntityId;

    public LookupData() {
    }

    public Long getSelectedEntityId() {
        return (Long) getValue();
    }

    public void setSelectedEntityId(final Long selectedEntityId) {
        setValue(selectedEntityId);
    }

    public String getSelectedEntityValue() {
        return selectedEntityValue;
    }

    public void setSelectedEntityValue(final String selectedEntityValue) {
        this.selectedEntityValue = selectedEntityValue;
    }

    public void setContextEntityId(final Long contextEntityId) {
        this.contextEntityId = contextEntityId;
    }

    public Long getContextEntityId() {
        return contextEntityId;
    }

    public void setSelectedEntityCode(final String selectedEntityCode) {
        this.selectedEntityCode = selectedEntityCode;
    }

    public String getSelectedEntityCode() {
        return selectedEntityCode;
    }

}