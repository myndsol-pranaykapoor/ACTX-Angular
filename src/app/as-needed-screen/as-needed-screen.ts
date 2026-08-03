import { Component, Output, EventEmitter, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebHeaderComponent } from '../web-header/web-header.component';
import { CommandBarComponent } from '../command-bar/command-bar.component';
import { WebFooterComponent } from '../web-footer/web-footer.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { PopUpHeaderComponent } from '../pop-up-header/pop-up-header.component';
import { ChipTagComponent } from '../chip-tag/chip-tag.component';
import { FilterDrawerComponent, FilterDrawerSection } from '../filter-drawer/filter-drawer.component';
import { TableComponent, TableHeaderColumn, DataRowTabConfig } from '../table/table.component';
import { TabBarComponent, TabBarItem } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'pds-as-needed-screen',
  standalone: true,
  imports: [CommonModule, WebHeaderComponent, CommandBarComponent, WebFooterComponent, SectionHeaderComponent, PopUpHeaderComponent, ChipTagComponent, FilterDrawerComponent, TableComponent, TabBarComponent],
  templateUrl: './as-needed-screen.html',
  styleUrl: './as-needed-screen.css',
  encapsulation: ViewEncapsulation.None,
})
export class AsNeededScreen {
  @Output() navigateToLogin = new EventEmitter<void>();
  @Output() navigateToHome = new EventEmitter<void>();

  filterDrawerOpen = signal(false);
  filterDrawerSections: FilterDrawerSection[] = [
    {
      type: 'multi-selection',
      title: 'Entity Type',
      options: [
        { label: 'Private Limited', checked: true },
        { label: 'Public Limited', checked: false },
        { label: 'LLP', checked: false },
        { label: 'Partnership', checked: false },
      ],
    },
    {
      type: 'multi-selection',
      title: 'State',
      options: [
        { label: 'Maharashtra', checked: true },
        { label: 'Tamil Nadu', checked: false },
        { label: 'Gujarat', checked: false },
        { label: 'Karnataka', checked: false },
        { label: 'Delhi', checked: false },
      ],
    },
    {
      type: 'multi-selection',
      title: 'Industry',
      options: [
        { label: 'Manufacturing', checked: false },
        { label: 'IT Services', checked: true },
        { label: 'Retail', checked: false },
        { label: 'Healthcare', checked: false },
        { label: 'Education', checked: false },
      ],
    },
  ];


  // As Needed Table Configuration - 10 Columns
  asNeededTableColumns: TableHeaderColumn[] = [
    { type: 'text', label: 'Doc ID' },
    { type: 'text', label: 'Att.' },
    { type: 'text', label: 'Company Name' },
    { type: 'text', label: 'State' },
    { type: 'text', label: 'Site' },
    { type: 'text', label: 'Act' },
    { type: 'text', label: 'Activity' },
    { type: 'text', label: 'RC/Lic No.' },
    { type: 'text', label: 'Due Date' },
    { type: 'text', label: 'Status' },
  ];

  asNeededTableRows: DataRowTabConfig[][] = [
    [
      { type: 'text', text: 'DOC001' },
      { type: 'text', text: 'A1' },
      { type: 'text', text: 'ABC Corporation' },
      { type: 'text', text: 'Maharashtra' },
      { type: 'text', text: 'Mumbai' },
      { type: 'text', text: 'GST' },
      { type: 'text', text: 'Filing' },
      { type: 'text', text: 'GSTIN123456' },
      { type: 'text', text: '20 Aug 2026' },
      { type: 'text', text: 'Pending' },
    ],
    [
      { type: 'text', text: 'DOC002' },
      { type: 'text', text: 'A2' },
      { type: 'text', text: 'XYZ Industries' },
      { type: 'text', text: 'Delhi' },
      { type: 'text', text: 'Delhi HQ' },
      { type: 'text', text: 'PF' },
      { type: 'text', text: 'Compliance' },
      { type: 'text', text: 'DL001234' },
      { type: 'text', text: '15 Aug 2026' },
      { type: 'text', text: 'Completed' },
    ],
    [
      { type: 'text', text: 'DOC003' },
      { type: 'text', text: 'B1' },
      { type: 'text', text: 'Tech Solutions Ltd' },
      { type: 'text', text: 'Karnataka' },
      { type: 'text', text: 'Bangalore' },
      { type: 'text', text: 'ESI' },
      { type: 'text', text: 'Filing' },
      { type: 'text', text: 'ESI567890' },
      { type: 'text', text: '25 Aug 2026' },
      { type: 'text', text: 'Pending' },
    ],
    [
      { type: 'text', text: 'DOC004' },
      { type: 'text', text: 'C1' },
      { type: 'text', text: 'Global Trade Inc' },
      { type: 'text', text: 'Tamil Nadu' },
      { type: 'text', text: 'Chennai' },
      { type: 'text', text: 'Labor' },
      { type: 'text', text: 'Renewal' },
      { type: 'text', text: 'TN112233' },
      { type: 'text', text: '10 Sep 2026' },
      { type: 'text', text: 'Pending' },
    ],
    [
      { type: 'text', text: 'DOC005' },
      { type: 'text', text: 'A3' },
      { type: 'text', text: 'Finance Partners' },
      { type: 'text', text: 'Gujarat' },
      { type: 'text', text: 'Ahmedabad' },
      { type: 'text', text: 'Audit' },
      { type: 'text', text: 'Compliance' },
      { type: 'text', text: 'GJ445566' },
      { type: 'text', text: '30 Aug 2026' },
      { type: 'text', text: 'Completed' },
    ],
    [
      { type: 'text', text: 'DOC006' },
      { type: 'text', text: 'B2' },
      { type: 'text', text: 'Legal Consultants' },
      { type: 'text', text: 'Telangana' },
      { type: 'text', text: 'Hyderabad' },
      { type: 'text', text: 'Compliance' },
      { type: 'text', text: 'Review' },
      { type: 'text', text: 'TG778899' },
      { type: 'text', text: '12 Sep 2026' },
      { type: 'text', text: 'In Progress' },
    ],
    [
      { type: 'text', text: 'DOC007' },
      { type: 'text', text: 'C2' },
      { type: 'text', text: 'Manufacturing Co' },
      { type: 'text', text: 'Uttar Pradesh' },
      { type: 'text', text: 'Noida' },
      { type: 'text', text: 'Safety' },
      { type: 'text', text: 'Audit' },
      { type: 'text', text: 'UP990011' },
      { type: 'text', text: '22 Aug 2026' },
      { type: 'text', text: 'Completed' },
    ],
    [
      { type: 'text', text: 'DOC008' },
      { type: 'text', text: 'D1' },
      { type: 'text', text: 'Retail Group Ltd' },
      { type: 'text', text: 'West Bengal' },
      { type: 'text', text: 'Kolkata' },
      { type: 'text', text: 'Tax' },
      { type: 'text', text: 'Filing' },
      { type: 'text', text: 'WB223344' },
      { type: 'text', text: '18 Aug 2026' },
      { type: 'text', text: 'Pending' },
    ],
    [
      { type: 'text', text: 'DOC009' },
      { type: 'text', text: 'A4' },
      { type: 'text', text: 'Energy Solutions' },
      { type: 'text', text: 'Rajasthan' },
      { type: 'text', text: 'Jaipur' },
      { type: 'text', text: 'Environmental' },
      { type: 'text', text: 'Compliance' },
      { type: 'text', text: 'RJ556677' },
      { type: 'text', text: '28 Aug 2026' },
      { type: 'text', text: 'Pending' },
    ],
    [
      { type: 'text', text: 'DOC010' },
      { type: 'text', text: 'B3' },
      { type: 'text', text: 'Services Private Ltd' },
      { type: 'text', text: 'Punjab' },
      { type: 'text', text: 'Chandigarh' },
      { type: 'text', text: 'IT' },
      { type: 'text', text: 'Registration' },
      { type: 'text', text: 'PB889900' },
      { type: 'text', text: '05 Sep 2026' },
      { type: 'text', text: 'Completed' },
    ],
  ];

  asNeededTableTotalItems = 10;
  asNeededTablePageSize = 10;

  // Tab Bar Configuration for As Needed Reports
  asNeededTabItems: TabBarItem[] = [
    { label: 'Registrations & Licenses' },
    { label: 'Completed Activity' },
    { label: 'All' },
  ];

  get currentMonthDateRange(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = 1;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today);
    return `${firstDay} ${monthName} ${year} - ${lastDay} ${monthName} ${year}`;
  }


  onFooterAction1() {
    console.log('Footer action 1 clicked');
  }

  onFooterAction2() {
    console.log('Footer action 2 clicked');
  }

  onCommandBarSecondaryClick() {
    this.filterDrawerOpen.set(true);
  }

  onFilterDrawerClose() {
    this.filterDrawerOpen.set(false);
  }

  onFilterDrawerApply() {
    console.log('Filters applied');
    this.filterDrawerOpen.set(false);
  }

  onFilterDrawerReset() {
    console.log('Filters reset');
  }

  onAsNeededTabChange(event: any) {
    console.log('As Needed tab changed to:', event);
  }

  onCommandBarPrimaryClick() {
    this.navigateToLogin.emit();
  }
}
