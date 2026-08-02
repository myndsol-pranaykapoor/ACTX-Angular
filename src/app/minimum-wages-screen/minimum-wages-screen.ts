import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from '../web-header/web-header.component';
import { CommandBarComponent } from '../command-bar/command-bar.component';
import { WebFooterComponent } from '../web-footer/web-footer.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { SideMenuComponent, SideMenuEntry } from '../side-menu/side-menu.component';
import { TableComponent, TableHeaderColumn, DataRowTabConfig } from '../table/table.component';
import { ChipTagComponent } from '../chip-tag/chip-tag.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { SearchComponent } from '../search/search.component';
import { PopupLayoutComponent } from '../popup-layout/popup-layout.component';
import { PopUpHeaderComponent } from '../pop-up-header/pop-up-header.component';
import { PopUpFooterComponent } from '../pop-up-footer/pop-up-footer.component';
import { SemanticPopupComponent } from '../semantic-popup/semantic-popup.component';

@Component({
  selector: 'pds-minimum-wages-screen',
  standalone: true,
  imports: [CommonModule, WebHeaderComponent, CommandBarComponent, WebFooterComponent, SectionHeaderComponent, SideMenuComponent, TableComponent, ChipTagComponent, InputFieldComponent, SearchComponent, PopupLayoutComponent, PopUpHeaderComponent, PopUpFooterComponent, SemanticPopupComponent],
  templateUrl: './minimum-wages-screen.html',
  styleUrl: './minimum-wages-screen.css',
  encapsulation: ViewEncapsulation.None,
})
export class MinimumWagesScreen {
  @Output() back = new EventEmitter<void>();
  @Output() navigateToLogin = new EventEmitter<void>();
  @Output() showUpdatesPopup = new EventEmitter<void>();

  sideMenuEntries: SideMenuEntry[] = [
    {
      id: 'e-library', title: 'E - Library', icon: 'file', type: 'item'
    },
    {
      id: 'compliance-calendar', title: 'Compliance Calendar', icon: 'calendar', type: 'item'
    },
    {
      id: 'minimum-wages', title: 'Minimum Wages', icon: 'rupee', type: 'item'
    },
  ];

  sideMenuVersion = '1.0';
  sideMenuAction1Icon = 'help-circle';
  sideMenuAction2Icon = 'settings';
  sideMenuAction3Icon = 'log-out';

  tableColumns: TableHeaderColumn[] = [
    { type: 'text', label: 'Emp. Class' },
    { type: 'text', label: 'Zone' },
    { type: 'text', label: 'Category' },
    { type: 'text', label: "Day's Basic" },
    { type: 'text', label: "Day's VDA" },
    { type: 'text', label: "Day's Total" },
    { type: 'text', label: "Month's Basic" },
    { type: 'text', label: "Month's VDA" },
    { type: 'text', label: "Month's Total" },
  ];

  tableRows: DataRowTabConfig[][] = [
    [
      { type: 'text', text: 'Unskilled' },
      { type: 'text', text: 'Zone A' },
      { type: 'text', text: 'Manufacturing' },
      { type: 'text', text: '₹500' },
      { type: 'text', text: '₹100' },
      { type: 'text', text: '₹600' },
      { type: 'text', text: '₹10,000' },
      { type: 'text', text: '₹2,000' },
      { type: 'text', text: '₹12,000' },
    ],
    [
      { type: 'text', text: 'Skilled' },
      { type: 'text', text: 'Zone B' },
      { type: 'text', text: 'Construction' },
      { type: 'text', text: '₹600' },
      { type: 'text', text: '₹120' },
      { type: 'text', text: '₹720' },
      { type: 'text', text: '₹12,000' },
      { type: 'text', text: '₹2,400' },
      { type: 'text', text: '₹14,400' },
    ],
    [
      { type: 'text', text: 'Semi-skilled' },
      { type: 'text', text: 'Zone C' },
      { type: 'text', text: 'Textile' },
      { type: 'text', text: '₹550' },
      { type: 'text', text: '₹110' },
      { type: 'text', text: '₹660' },
      { type: 'text', text: '₹11,000' },
      { type: 'text', text: '₹2,200' },
      { type: 'text', text: '₹13,200' },
    ],
  ];

  tableTotalItems = 3;
  tablePageSize = 10;

  lastUpdateDate = '19 Oct 2025';

  additionalTableColumns: TableHeaderColumn[] = [
    { type: 'text', label: 'Document Name' },
    { type: 'text', label: 'Notification Date' },
    { type: 'text', label: 'Actions', shrink: true },
  ];

  additionalTableRows: DataRowTabConfig[][] = [
    [
      { type: 'text', text: 'Minimum Wage Notification 2024' },
      { type: 'text', text: '15-Jul-2024' },
      { type: 'actions', showSwitch: false, showRadio: false, showCheckbox: false, showDownload: true, showEdit: false, showView: false, showExternalLink: false, showTrash: false, showMoreActions: false },
    ],
    [
      { type: 'text', text: 'Wage Revision Guidelines' },
      { type: 'text', text: '22-Aug-2024' },
      { type: 'actions', showSwitch: false, showRadio: false, showCheckbox: false, showDownload: true, showEdit: false, showView: false, showExternalLink: false, showTrash: false, showMoreActions: false },
    ],
    [
      { type: 'text', text: 'Zone Classification Update' },
      { type: 'text', text: '10-Sep-2024' },
      { type: 'actions', showSwitch: false, showRadio: false, showCheckbox: false, showDownload: true, showEdit: false, showView: false, showExternalLink: false, showTrash: false, showMoreActions: false },
    ],
  ];

  additionalTableTotal = 3;

  selectedStates: Set<string> = new Set();

  indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  industries = [
    'Manufacturing', 'Construction', 'Textile', 'Agriculture', 'Mining',
    'Transportation', 'Retail', 'Hospitality', 'Healthcare', 'IT Services'
  ];

  effectiveTimePeriods = [
    'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024',
    'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'
  ];

  onStateClick(state: string): void {
    if (this.selectedStates.has(state)) {
      this.selectedStates.delete(state);
    } else {
      this.selectedStates.add(state);
    }
  }

  isStateSelected(state: string): boolean {
    return this.selectedStates.has(state);
  }

  onBackClick() {
    this.back.emit();
  }

  onSideMenuItemSelected(itemId: string) {
    console.log('Side menu item selected:', itemId);
  }

  onSideMenuAction1Click() {
    console.log('Side menu action 1 clicked');
  }

  onSideMenuAction2Click() {
    console.log('Side menu action 2 clicked');
  }

  onSideMenuAction3Click() {
    console.log('Side menu action 3 clicked');
  }

  onFooterAction1() {
    console.log('Footer action 1 clicked');
  }

  onFooterAction2() {
    console.log('Footer action 2 clicked');
  }

  onCommandBarSecondaryClick() {
    this.showUpdatesPopup.emit();
  }

  onCommandBarPrimaryClick() {
    this.navigateToLogin.emit();
  }
}
