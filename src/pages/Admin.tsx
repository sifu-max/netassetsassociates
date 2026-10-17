import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, FileText, CheckCircle2, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const ADMIN_PASSWORD = "netassets2026";

const Admin = () => {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("na_admin_unlocked") === "1"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("na_admin_unlocked", "1");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-background rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <img src={logo} alt="Net Assets & Associates" className="h-14 w-auto mb-4" />
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-gold" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-foreground">Admin Access</h1>
            <p className="text-muted-foreground text-sm mt-1">
              This page is restricted to authorized administrators.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={error ? "border-destructive" : ""}
              autoFocus
            />
            {error && (
              <p className="text-destructive text-sm">Incorrect password. Please try again.</p>
            )}
            <Button variant="gold" size="lg" className="w-full" type="submit">
              Unlock
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <header className="bg-primary border-b border-gold/20 sticky top-0 z-40">
        <div className="container-width flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Net Assets & Associates" className="h-10 w-auto" />
            <span className="text-primary-foreground font-serif font-semibold hidden sm:inline">
              Admin — Internal Proposal
            </span>
          </div>
          <button
            onClick={() => {
              sessionStorage.removeItem("na_admin_unlocked");
              setUnlocked(false);
            }}
            className="text-primary-foreground/70 hover:text-gold text-sm font-medium transition-colors"
          >
            Lock page
          </button>
        </div>
      </header>

      <main className="container-width py-10 max-w-4xl">
        <article className="bg-background rounded-2xl shadow-lg p-6 sm:p-10 space-y-10">
          {/* Title */}
          <div className="border-b border-border pb-6">
            <div className="flex items-center gap-2 text-gold text-sm font-semibold tracking-wide uppercase mb-2">
              <FileText className="w-4 h-4" /> Confidential Proposal
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Operations &amp; Front Office Modernization Proposal
            </h1>
            <p className="text-xl text-muted-foreground mt-1">Net Assets</p>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Prepared for:</strong> Lenning | Net Assets (Pleasant Hill, CA)</p>
              <p><strong className="text-foreground">Prepared by:</strong> Dimitri I. Mills Jr., MBA | CRM Chains</p>
              <p><strong className="text-foreground">Date:</strong> October 2026</p>
            </div>
          </div>

          {/* Executive Summary */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Executive Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Net Assets provides critical tax, ITIN, and consulting services to a bilingual community in the East Bay.
              As transaction volume expands, handling client follow-ups, document chasing, appointment coordination, and
              evening administrative work pulls valuable focus away from high-margin tax and advisory delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              This proposal details the implementation of the <strong className="text-foreground">CRM Chains AI Pro</strong> front-office
              system. It provides a single client database, automated bilingual communications, structured document pipelines,
              and scalable administrative support. It operates alongside your tax software and accounting records without
              interfering with your general ledger or payroll books.
            </p>
          </section>

          {/* What AI Pro Solves */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">What AI Pro Solves for Net Assets</h2>

            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">1. Bilingual Lead &amp; Document Intake</h3>
            <ul className="space-y-3 mb-6">
              {[
                ["Unified Client Database", "Replaces spreadsheets with a centralized database segmented by language preference (English/Spanish), tax identification status (SSN, has ITIN, needs ITIN), and service interest."],
                ["Bilingual AI Voice Agent", "Deploys an inbound/outbound phone assistant to answer common intake questions, provide document checklists, and offer booking links."],
                ["Speed-to-Lead Follow-Up", "Instantly triggers an SMS or email response when an inbound call is missed or a website inquiry is submitted."],
                ["Automated Document Chasing", "Sends scheduled reminders via text and email to prompt clients to submit W-2s, 1099s, prior tax returns, or identity documents before appointments."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-muted-foreground"><strong className="text-foreground">{title}:</strong> {desc}</p>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">2. Digital Visibility &amp; Marketing</h3>
            <ul className="space-y-3">
              {[
                ["Custom Net Assets Website", "A modern, mobile-optimized site built to capture local search traffic in Pleasant Hill and Contra Costa County."],
                ["Integrated Booking Funnel", "Web visitors can schedule directly into pre-configured appointment slots tied to specific intake forms."],
                ["Client Reactivation Campaigns", "Enables bilingual broadcast messages to prior tax clients ahead of key deadlines."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-muted-foreground"><strong className="text-foreground">{title}:</strong> {desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Scope Boundaries */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Technical &amp; Software Scope Boundaries</h2>
            <p className="text-muted-foreground mb-4">Clear boundaries ensure your accounting operations remain compliant and protected:</p>
            <ul className="space-y-3">
              {[
                ["QuickBooks Scope", "The platform connects to Intuit QuickBooks via Settings > Integrations to sync contacts, customer records, invoices, and sales receipts. It does not import general ledger accounts, handle reconciliations, or automate payroll filings. Core accounting, reconciliations, and tax software remain separate."],
                ["Payroll & ITIN Regulations", "In accordance with standard Intuit and IRS payroll guidelines, an ITIN cannot be substituted for an SSN on employee payroll. All payroll advisory inquiries will be routed to phone consultations or info@netassets.tax rather than open calendar bookings."],
                ["Telephony & Messaging", "The office line (510-520-2707) can be forwarded to the AI voice assistant. High-volume SMS messaging requires standard A2P 10DLC carrier compliance registration, which will be submitted during setup."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-muted-foreground"><strong className="text-foreground">{title}:</strong> {desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Pricing Table */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">Menu of Solutions &amp; Pricing</h2>
            <p className="text-muted-foreground mb-4">
              Below is the standard CRM Chains service schedule alongside the customized pricing arranged for Net Assets.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-4 font-semibold">Package</th>
                    <th className="text-left p-4 font-semibold">Standard Pricing</th>
                    <th className="text-left p-4 font-semibold">Scope &amp; Target Fit</th>
                    <th className="text-left p-4 font-semibold">Net Assets Preferred Offer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="align-top">
                    <td className="p-4 font-semibold text-foreground">AI Pro + Website Built for You</td>
                    <td className="p-4 text-foreground font-semibold">$197/mo</td>
                    <td className="p-4 text-muted-foreground">Full AI Pro suite, CRM pipelines, bilingual AI agents, automated follow-up, and complete website build. Best when clients struggle to find you online.</td>
                    <td className="p-4"><span className="text-gold font-bold">$97/mo for 6 months</span><br /><span className="text-muted-foreground italic">(Waived setup; website build included free; adjusts to standard $197/mo in Month 7)</span></td>
                  </tr>
                  <tr className="align-top bg-muted/40">
                    <td className="p-4 font-semibold text-foreground">AI Pro + Website + Assistant (20 hrs/mo)</td>
                    <td className="p-4 text-foreground font-semibold">$494/mo</td>
                    <td className="p-4 text-muted-foreground">Everything in AI Pro + Website, plus a dedicated human virtual assistant providing 20 hours/month of administrative support. Best if you find yourself doing admin work late at night.</td>
                    <td className="p-4"><span className="text-gold font-bold">$394/mo for 6 months</span><br /><span className="text-muted-foreground italic">(Includes $100/mo partner courtesy credit and waived implementation)</span></td>
                  </tr>
                  <tr className="align-top">
                    <td className="p-4 font-semibold text-foreground">Setup &amp; Implementation</td>
                    <td className="p-4 text-foreground font-semibold">$497 one-time</td>
                    <td className="p-4 text-muted-foreground">Technical setup, pipeline design, workflow automations, and custom tax intake fields.</td>
                    <td className="p-4"><span className="text-gold font-bold">$0 (100% Waived)</span></td>
                  </tr>
                  <tr className="align-top bg-muted/40">
                    <td className="p-4 font-semibold text-foreground">Website Only (Standard Build)</td>
                    <td className="p-4 text-foreground font-semibold">$497 one-time</td>
                    <td className="p-4 text-muted-foreground">Standalone branded website without CRM backend or automations.</td>
                    <td className="p-4 text-muted-foreground italic">Not recommended (intake workflows require CRM connection)</td>
                  </tr>
                  <tr className="align-top">
                    <td className="p-4 font-semibold text-foreground">Website Only (Extended Build)</td>
                    <td className="p-4 text-foreground font-semibold">$997 one-time</td>
                    <td className="p-4 text-muted-foreground">Large-scale custom site build without CRM automations.</td>
                    <td className="p-4 text-muted-foreground italic">Not recommended</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Add-Ons */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Specialized Add-On Packages</h2>

            <div className="rounded-xl border border-border p-6 mb-4">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">1. Dedicated Front-Office Assistant (20 Hours / Month)</h3>
              <p className="text-muted-foreground mb-3">
                Designed to remove routine administrative overhead so your time stays focused on filing returns and billable consultations:
              </p>
              <ul className="space-y-2 mb-3">
                {[
                  ["Intake & Document Verification", "Reviews incoming client uploads, flags missing schedules or W-2s, and updates pipeline tags."],
                  ["Appointment Coordination", "Follows up on missed appointments, confirms calendar schedules, and reschedules cancellations."],
                  ["Outbound Coordination", "Monitors responses to broadcast campaigns and handles routine customer service questions."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-muted-foreground"><strong className="text-foreground">{title}:</strong> {desc}</p>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Investment:</strong> <span className="text-gold font-bold">$297/mo</span> as an add-on
                (or bundled inside the <strong className="text-foreground">$494/mo</strong> AI Pro + Assistant plan).
              </p>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">2. Local Business Lead Generation Engine</h3>
              <p className="text-muted-foreground mb-3">
                An outbound acquisition engine built to source high-value business bookkeeping, corporate tax, and payroll consulting clients:
              </p>
              <ul className="space-y-2 mb-3">
                {[
                  ["Targeted Prospecting", "Curates verified lists of local small business owners and Hispanic-owned businesses across Contra Costa County and the East Bay."],
                  ["Bilingual B2B Campaigns", "Runs structured email and SMS outreach introducing Net Assets tax strategy and bookkeeping services."],
                  ["Direct Booking", "Drives qualified business owners straight onto your calendar for discovery calls."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-muted-foreground"><strong className="text-foreground">{title}:</strong> {desc}</p>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Investment:</strong> Custom retainer based on target outreach volume.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Recommended Next Steps</h2>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li><strong className="text-foreground">Select Package Configuration:</strong> Confirm whether to launch with the foundational <strong className="text-foreground">AI Pro + Website</strong> ($97/mo preferred rate) or add the <strong className="text-foreground">20 hrs/mo Virtual Assistant</strong> ($394/mo preferred rate) to offload night-time administrative tasks.</li>
              <li><strong className="text-foreground">Authorize Setup:</strong> Sign below to lock in the waived setup fee and 6-month preferred pricing.</li>
              <li><strong className="text-foreground">Week 1 Kickoff:</strong> Initiate A2P carrier registration, configure custom tax fields, and connect your partially completed website.</li>
            </ol>
          </section>

          {/* Authorization */}
          <section className="border-t border-border pt-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Authorization &amp; Agreement</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Accepted for Net Assets:</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="border-b border-border pb-1">Signature: _______________________________</div>
                  <p>Name: Lenning</p>
                  <p>Title: Owner / Principal, Net Assets</p>
                  <div className="border-b border-border pb-1">Date: ____________________________________</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Accepted for CRM Chains:</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="border-b border-border pb-1">Signature: _______________________________</div>
                  <p>Name: Dimitri I. Mills Jr., MBA</p>
                  <p>Title: Founder, CRM Chains</p>
                  <div className="border-b border-border pb-1">Date: ____________________________________</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-primary rounded-xl p-6 text-center">
            <p className="text-primary-foreground/80 text-sm mb-3">Questions about this proposal?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+15105202707" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium">
                <Phone className="w-4 h-4" /> 510-520-2707
              </a>
              <a href="mailto:info@netassets.tax" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium">
                <Mail className="w-4 h-4" /> info@netassets.tax
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Admin;
