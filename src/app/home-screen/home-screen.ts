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

@Component({
  selector: 'pds-home-screen',
  standalone: true,
  imports: [CommonModule, WebHeaderComponent, CommandBarComponent, WebFooterComponent, SectionHeaderComponent, PopUpHeaderComponent, ChipTagComponent, FilterDrawerComponent, TableComponent],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeScreen {
  @Output() back = new EventEmitter<void>();
  @Output() navigateToLogin = new EventEmitter<void>();
  @Output() navigateToAsNeeded = new EventEmitter<void>();
  @Output() showUpdatesPopup = new EventEmitter<void>();

  currentUpdateIndex = signal(0);
  navigateDirection = signal<'left' | 'right'>('left');

  // Compliance Status SLA
  complianceExpiredSLA = signal(12);
  complianceWithinSLA = signal(73);

  // Pending Actions SLA
  actionsExpiredSLA = signal(2);
  actionsWithinSLA = signal(3);

  // Documents SLA
  documentsExpiredSLA = signal(8);
  documentsWithinSLA = signal(16);

  // Notifications SLA
  notificationsExpiredSLA = signal(5);
  notificationsWithinSLA = signal(7);

  // Current month date range
  get currentMonthDateRange(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = 1;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today);
    return `${firstDay} ${monthName} ${year} - ${lastDay} ${monthName} ${year}`;
  }

  // Act Wise Table Configuration
  actWiseTableColumns: TableHeaderColumn[] = [
    { type: 'text', label: 'Obligation' },
    { type: 'text', label: 'Status' },
    { type: 'text', label: 'Due Date' },
    { type: 'text', label: 'Priority' },
  ];

  actWiseTableRows: DataRowTabConfig[][] = [
    [
      { type: 'text', text: 'GST Filing' },
      { type: 'text', text: 'Completed' },
      { type: 'text', text: '20 Aug 2026' },
      { type: 'text', text: 'High' },
    ],
    [
      { type: 'text', text: 'Payroll Processing' },
      { type: 'text', text: 'Pending' },
      { type: 'text', text: '25 Aug 2026' },
      { type: 'text', text: 'High' },
    ],
    [
      { type: 'text', text: 'Compliance Report' },
      { type: 'text', text: 'In Progress' },
      { type: 'text', text: '30 Aug 2026' },
      { type: 'text', text: 'Medium' },
    ],
    [
      { type: 'text', text: 'Income Tax Return' },
      { type: 'text', text: 'Completed' },
      { type: 'text', text: '15 Aug 2026' },
      { type: 'text', text: 'High' },
    ],
    [
      { type: 'text', text: 'PF Compliance' },
      { type: 'text', text: 'Pending' },
      { type: 'text', text: '28 Aug 2026' },
      { type: 'text', text: 'High' },
    ],
    [
      { type: 'text', text: 'ESI Filing' },
      { type: 'text', text: 'Completed' },
      { type: 'text', text: '18 Aug 2026' },
      { type: 'text', text: 'Medium' },
    ],
    [
      { type: 'text', text: 'Labor License Renewal' },
      { type: 'text', text: 'In Progress' },
      { type: 'text', text: '5 Sep 2026' },
      { type: 'text', text: 'Low' },
    ],
    [
      { type: 'text', text: 'Trade License Update' },
      { type: 'text', text: 'Pending' },
      { type: 'text', text: '10 Sep 2026' },
      { type: 'text', text: 'Medium' },
    ],
    [
      { type: 'text', text: 'Environmental Audit' },
      { type: 'text', text: 'Completed' },
      { type: 'text', text: '12 Aug 2026' },
      { type: 'text', text: 'Low' },
    ],
    [
      { type: 'text', text: 'Safety Compliance' },
      { type: 'text', text: 'In Progress' },
      { type: 'text', text: '22 Aug 2026' },
      { type: 'text', text: 'High' },
    ],
  ];

  actWiseTableTotalItems = 10;
  actWiseTablePageSize = 10;

  // Compliance Status Table Configuration
  complianceStatusTableColumns: TableHeaderColumn[] = [
    { type: 'text', label: 'Policy' },
    { type: 'text', label: 'Status' },
    { type: 'text', label: 'Last Updated' },
    { type: 'text', label: 'Risk Level' },
  ];

  complianceStatusTableRows: DataRowTabConfig[][] = [
    [
      { type: 'text', text: 'Data Protection Policy' },
      { type: 'text', text: 'Compliant' },
      { type: 'text', text: '5 Aug 2026' },
      { type: 'text', text: 'Low' },
    ],
    [
      { type: 'text', text: 'Workplace Safety' },
      { type: 'text', text: 'Compliant' },
      { type: 'text', text: '10 Aug 2026' },
      { type: 'text', text: 'Low' },
    ],
    [
      { type: 'text', text: 'Anti-Corruption Policy' },
      { type: 'text', text: 'Compliant' },
      { type: 'text', text: '8 Aug 2026' },
      { type: 'text', text: 'Low' },
    ],
    [
      { type: 'text', text: 'Environmental Standards' },
      { type: 'text', text: 'Non-Compliant' },
      { type: 'text', text: '20 Jul 2026' },
      { type: 'text', text: 'High' },
    ],
    [
      { type: 'text', text: 'Financial Controls' },
      { type: 'text', text: 'Compliant' },
      { type: 'text', text: '15 Aug 2026' },
      { type: 'text', text: 'Low' },
    ],
  ];

  complianceStatusTableTotalItems = 5;
  complianceStatusTablePageSize = 10;

  complianceUpdates = [
    {
      title: 'GST Filing Deadline Approaching',
      description: 'GSTR-3B filing deadline for July 2026 is on August 20, 2026. Please ensure timely submission.',
      releaseDate: '28 Jul 2026'
    },
    {
      title: 'Minimum Wage Revision Notice',
      description: 'New minimum wage rates for Maharashtra effective from August 1, 2026. Update payroll accordingly.',
      releaseDate: '1 Aug 2026'
    },
    {
      title: 'EPFO Compliance Update',
      description: 'EPFO now requires quarterly submission of attendance records. Non-compliance may result in penalties.',
      releaseDate: '15 Jul 2026'
    },
    {
      title: 'PF Interest Credited',
      description: 'Monthly PF interest of 8.15% has been credited to all eligible employee accounts.',
      releaseDate: '1 Aug 2026'
    },
    {
      title: 'Labor Law Amendment',
      description: 'New provisions in Industrial Relations Code effective from September 1, 2026. Review and update policies.',
      releaseDate: '25 Jul 2026'
    }
  ];

  private autoRotateInterval: ReturnType<typeof setInterval> | null = null;
  private manualNavigationTimeout: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.startAutoRotate();
  }

  ngOnDestroy() {
    this.stopAutoRotate();
    if (this.manualNavigationTimeout) {
      clearTimeout(this.manualNavigationTimeout);
    }
  }

  private startAutoRotate() {
    this.navigateDirection.set('left');
    this.autoRotateInterval = setInterval(() => {
      this.navigateDirection.set('left');
      this.currentUpdateIndex.update(index => (index + 1) % this.complianceUpdates.length);
    }, 10000);
  }

  private stopAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  private pauseAndResumeAutoRotate() {
    this.stopAutoRotate();
    if (this.manualNavigationTimeout) {
      clearTimeout(this.manualNavigationTimeout);
    }
    this.manualNavigationTimeout = setTimeout(() => {
      this.startAutoRotate();
    }, 10000);
  }

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

  onNextUpdate() {
    this.navigateDirection.set('left');
    this.currentUpdateIndex.update(index => (index + 1) % this.complianceUpdates.length);
    this.pauseAndResumeAutoRotate();
  }

  onPreviousUpdate() {
    this.navigateDirection.set('right');
    this.currentUpdateIndex.update(index => (index - 1 + this.complianceUpdates.length) % this.complianceUpdates.length);
    this.pauseAndResumeAutoRotate();
  }

  onBackClick() {
    this.back.emit();
  }

  onCommandBarPrimaryClick() {
    this.navigateToLogin.emit();
  }
}
