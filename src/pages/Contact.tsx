import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Linkedin, Mail, Youtube, Clock } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t("contact.validation.name_required");
    if (!form.email.trim()) e.email = t("contact.validation.email_required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("contact.validation.email_invalid");
    if (!form.message.trim()) e.message = t("contact.validation.message_required");
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("contact.page_title")}</h1>
            <p className="max-w-xl text-lg text-muted-foreground">{t("contact.page_sub")}</p>
          </motion.div>

          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.name")}</label>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.email")}</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.message")}</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                      />
                      {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                    >
                      <Send className="h-4 w-4" />
                      {t("contact.send")}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle className="mb-4 h-12 w-12 text-foreground" />
                    <p className="text-lg font-medium text-foreground">{t("contact.success")}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{t("contact.timezone")}</span>
              </div>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" /> hello@example.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
